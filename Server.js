const app = require('express')();
const http = require('http').Server(app);
const http2 = require('http')
const io = require('socket.io')(http);
const sqlite3 = require('sqlite3');
const API_KEY = '107825e88315af6b3054a9ad7f08fa1d'; //107825e88315af6b3054a9ad7f08fa1d
const API_ID = '94481c62'; //94481c62
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


//creates the sqlite database if it doesnt exist
const db = new sqlite3.Database("./db/mittelstufe.sqlite3", (err) => {
  if (err) {
    console.log('Error while creating the database', err);
  } else {
    createTable();
  }
});

//creates table benutzer if it doesnt exist 
const createTable = () => {
  db.run("CREATE TABLE IF NOT EXISTS benutzer(ID INTEGER PRIMARY KEY AUTOINCREMENT, Email TEXT, Username TEXT, Password TEXT, KeyID INTEGER, Token TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS favoriten(ID INTEGER, RecipeID TEXT, UNIQUE(ID, RecipeID))");
}

//gives connect Client an ID to control access on the server
io.on("connection", socket => {
  let previousId;
  const safeJoin = currentId => {
    socket.leave(previousId);
    socket.join(currentId);
    previousId = currentId;
  };

  socket.on("checkEmail", user => {
    const emailCheck = "SELECT * FROM benutzer WHERE Email = '" + user.email + "'";

    db.all(emailCheck, [], (err1, row1) => {
      if (err1) throw err1;
      if (row1.length > 0) {
        socket.emit("message", "EMAIL_TAKEN");
      } else {
        socket.emit("message", "EMAIL_FREE")
      }
    })
  })

  socket.on("checkUsername", user => {
    const usernameCheck = "SELECT * FROM benutzer WHERE Username = '" + user.username + "'";

    db.all(usernameCheck, [], (err1, row1) => {
      if (err1) throw err1;
      if (row1.length > 0) {
        socket.emit("message", "USERNAME_TAKEN");
      } else {
        socket.emit("message", "USERNAME_FREE")
      }
    })
  })

  //adds a User to the database, if username and email are not taken, emits REGISTRATION_SUCCESSFUL if action was successful
  socket.on("addUser", user => {
    const sql = "INSERT INTO benutzer(Email,Username,Password,KeyID) SELECT '" + user.email + "','" + user.username + "','" + user.password + "','" + user.KeyID + "'";

    db.run(sql, function (err) {
      //if function fails throw server error (database is not reachable etc.)
      if (err) throw err;
      socket.emit("message", "REGISTRATION_SUCCESSFUL")
    });
  });

  //gets the token of a specific user, emits token when successful, emits error if user was not found
  socket.on("authenticateUser", user => {
    const sql = "SELECT * FROM benutzer WHERE Username = '" + user.username + "' AND Password = '" + user.password + "'";
    db.all(sql, [], (err, row) => {
      if (err) throw err;
      if (row.length == 0) {
        //the selected user does not exist (password and username do not match)
        socket.emit("message", "USER_DOES_NOT_EXIST");
      } else {
        require('crypto').randomBytes(48, function (err, buffer) {
          var token = buffer.toString('hex');
          //emits the generated token for cookies
          socket.emit("message", token);
          const sql = "UPDATE benutzer SET Token = '" + token + "' WHERE Username = '" + user.username + "'";
          db.run(sql);
        });
      }
    });
  });

  //sets the token of the user to null to disconnect him from the website
  socket.on("disconnectUser", user => {
    const sql = "UPDATE benutzer SET Token = NULL WHERE Token = '" + user.token + "'";
    db.run(sql);
  });

  //gets the KeyID of a specific User and emits it when the action was successful
  socket.on("getKeyID", user => {
    const sql = "SELECT KeyID FROM benutzer WHERE Username = '" + user.username + "'";
    db.all(sql, [], (err, row) => {
      if (err) throw err;
      if (row.length == 0) {
        //if User has no valid KeyID return this
        socket.emit("message", "USER_HAS_NO_KEY");
      } else {
        //emits the token
        socket.emit("message", row[0].KeyID);
      }
    });
  });

  socket.on("updatePassword", user => {
    const sql = "UPDATE benutzer SET Password = '" + user.password + "', KeyID = '" + user.KeyID + "' WHERE Username = '" + user.username + "'";
    db.run(sql);
  });

  socket.on("updateEmail", user => {
    const emailCheck = "SELECT * FROM benutzer WHERE Email = '" + user.email + "' AND Username = '" + user.username + "'";
    db.all(emailCheck, [], (err, row) => {
      if (err) throw err;
      if (row.length == 0) {
        //if User has no valid KeyID return this
        socket.emit("message", "EMAIL_ALREADY_TAKEN");
      } else {
        //emits the token
        socket.emit("message", "EMAIL_FREE");
      }
    });
    const sql = "UPDATE benutzer SET Email = '" + user.email + "' WHERE   Username = '" + user.username + "'";
    db.run(sql);
  });

  socket.on("getLoggedInUser", user => {
    const sql = "SELECT Username, Email, ID FROM benutzer WHERE Token = '" + user.token + "'";
    db.all(sql, [], (err, row) => {
      if (err) throw err;
      if (row.length == 0) {
        //if there is no corresponding token return this
        socket.emit("message", "USER_NOT_FOUND");
      } else {
        //emits the username of the loggedIn User
        socket.emit("message", row[0]);
      }
    });
  });

  socket.on("removeAccount", user => {
    const sql = "DELETE FROM benutzer WHERE Token = '" + user.token + "'";
    db.run(sql);
  });

  socket.on("addFavorite", recipe => {
    const UserIDCheck = "SELECT ID FROM benutzer WHERE Token = '" + recipe.token + "'";
    db.all(UserIDCheck, [], (err, row) => {
      if (err) throw err;
      if (row.length == 0) {
        //if User has no valid Token:
        socket.emit("message", "NO_LOGGED_IN_USER");
      } else {
        const sql = "INSERT INTO favoriten (ID, RecipeID) SELECT '" + row[0].ID + "','" + recipe.ID + "'";

        db.all(sql, [], (err, row) => {
          if (err) {
            //if User has already favorirised this recipe return this            
            socket.emit("message", "RECIPE_IS_ALREADY_FAVORITE");
          }
          ;
          //recipe was successfully added to favorites
          socket.emit("message", "RECIPE_ADDED")

        });
      }
    });
  });

  socket.on("checkFavorite", recipe => {
    const UserIDCheck = "SELECT ID FROM benutzer WHERE Token = '" + recipe.token + "'";
    db.all(UserIDCheck, [], (err, row) => {
      if (err) throw err;
      if (row.length == 0) {
        //if User has no valid Token: 
        socket.emit("message", "NO_LOGGED_IN_USER");
      } else {
        const favoriteCheck = "SELECT * FROM favoriten WHERE ID = '" + row[0].ID + "' AND RecipeID = '" + recipe.ID + "'";
        db.all(favoriteCheck, [], (err, row) => {
          if (err) throw err;
          if (row.length == 0) {
            //if Recipe is not already a favortite of the logged in user:
            socket.emit("message", "NO_FAVORITE");
          } else {
            //if Recipe is already a favortite of the logged in user:
            socket.emit("message", "ALREADY_FAVORITE")
          }
        });
      }
    });
  });

  socket.on("removeFavorite", recipe => {
    const UserIDCheck = "SELECT ID FROM benutzer WHERE Token = '" + recipe.token + "'";
    db.all(UserIDCheck, [], (err, row) => {
      if (err) throw err;
      if (row.length == 0) {
        //if User has no valid KeyID return this
        socket.emit("message", "FAILED_TO_DELETE");
      } else {
        const sql = "DELETE FROM favoriten WHERE ID = '" + row[0].ID + "' AND RecipeID = '" + recipe.ID + "'"
        db.run(sql)
        socket.emit("message", "FAVORITE_REMOVED");
      }
    });
  });

  socket.on("getFavorites", user => {
    const sql = "SELECT * FROM favoriten WHERE ID = " + user.UserID;
    db.all(sql, [], (err, row) => {
      if (err) throw err;
      if (row.length == 0) {
        //if there are no favorties return this
        socket.emit("message", "NO_FAVORITES");
      } else {
        //emits all favorites of the user
        //socket.emit("message", row);
        let path = 'http://api.edamam.com';
        if (API_ID == '' || API_KEY == '') {
          console.error('API_ID und API_KEY müssen gegeben sein!');
          socket.emit('message', 'keine API Daten gegeben');
          return;
        }

        let data = [];

        path += '/search?app_id=' + API_ID + '&app_key=' + API_KEY;
        row.forEach(function (element) {
          let url = path + '&q=' + element.RecipeID;
          // console.log(url)
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
              var json = JSON.parse(xhr.responseText);
              console.log(json);
              // data.push(json);
            }
          };
          xhr.send();
        });
        // console.log(data.length)
        // data.forEach(function(element) {
        //   console.log(element)
        // })
        // socket.emit('message', data)
      }
    });
  });

  socket.on('getRezepte', req => {
    let path = 'http://api.edamam.com';
    if (API_ID == '' || API_KEY == '') {
      console.error('API_ID und API_KEY müssen gegeben sein!');
      socket.emit('message', 'keine API Daten gegeben');
      return;
    }
    path += '/search?app_id=' + API_ID + '&app_key=' + API_KEY
    if (req.ingredients) {
      path += '&q=' + req.ingredients;
    }
    // console.log(path)
    const response = http2.get(path, function (response) {
      let responseString = '';
      response.on("data", function (data) {
        responseString += data;
        // save all the data from response
      });
      response.on("end", function () {
        socket.emit('message', JSON.parse(responseString))
      });
    });
  });
});

//port on which the server is running eg. localhost:3000
http.listen(3000, () => console.log('Server is runnig at port no : 3000'));

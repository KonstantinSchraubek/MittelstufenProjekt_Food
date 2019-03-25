const app = require('express')();
const http = require('http').Server(app);
const http2 = require('http')
const io = require('socket.io')(http);
const sqlite3 = require('sqlite3');
const API_KEY = ''; //107825e88315af6b3054a9ad7f08fa1d
const API_ID = ''; //94481c62

//creates the sqlite database if it doesnt exist
let db = new sqlite3.Database("./db/mittelstufe.sqlite3", (err) => {
  if (err) {
    console.log('Error while creating the database', err);
  } else {
    createTable();
  }
});

//creates table benutzer if it doesnt exist 
const createTable = () => {
  db.run("CREATE TABLE IF NOT EXISTS benutzer(ID INTEGER PRIMARY KEY AUTOINCREMENT, Email TEXT, Nutzername TEXT, Passwort TEXT, KeyID INTEGER, Token TEXT)");
}

//gives connect Client an ID to control access on the server
io.on("connection", socket => {
  let previousId;
  const safeJoin = currentId => {
    socket.leave(previousId);
    socket.join(currentId);
    previousId = currentId;
  };

  //adds a User to the database, if the nutzername or the email are not taken, emits nothing if action was successful
  socket.on("addUser", user => {

    let usernameCheck = "SELECT * FROM benutzer WHERE Nutzername = '" + user.username + "'";
    let emailCheck = "SELECT * FROM benutzer WHERE Email = '" + user.email + "'";
    db.all(usernameCheck, [], (err, row) => {
      if (err) throw err;
      if (row.length == 0) {
        db.all(emailCheck, [], (err1, row1) => {
          if (err1) throw err1;
          if (row1.length == 0) {
            let sql = "INSERT INTO benutzer(Email,Nutzername,Passwort,KeyID) SELECT '" + user.email + "','" + user.username + "','" + user.password + "','" + user.KeyID + "'";

            db.run(sql, function (err) {
              //if function fails throw server error (database is not reachable etc.)
              if (err) throw err;
              socket.emit("message", "REGISTRATION_SUCCESSFUL")
            });
          } else {
            socket.emit("message", "EMAIL_TAKEN");
          }
        });
      } else {
        //if username or email are alredy taken emit this
        socket.emit("message", "USERNAME_TAKEN");
      }
    });
  });

  //gets the token of a specific user, emits token when successful, emits error if user was not found
  socket.on("authenticateUser", user => {
    let sql = "SELECT * FROM benutzer WHERE Nutzername = '" + user.username + "' AND Passwort = '" + user.password + "'";
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
          let sql = "UPDATE benutzer SET Token = '" + token + "' WHERE Nutzername = '" + user.username + "'";
          db.run(sql);
        });
      }
    });
  });

  //sets the token of the user to null to disconnect him from the website
  socket.on("disconnectUser", user => {
    let sql = "UPDATE benutzer SET Token = NULL WHERE Token = '" + user.token + "'";
    db.run(sql);
  });

  //gets the KeyID of a specific User and emits it when the action was successful
  socket.on("getKeyID", user => {
    let sql = "SELECT KeyID FROM benutzer WHERE Nutzername = '" + user.username + "'";
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
    let sql = "UPDATE benutzer SET Passwort = '" + user.password + "', KeyID = '" + user.KeyID + "' WHERE Nutzername = '" + user.username + "'";
    db.run(sql);
  });

  socket.on("updateEmail", user => {
    let sql = "UPDATE benutzer SET Email = '" + user.email + "' WHERE Nutzername = '" + user.username + "'";
    db.run(sql);
  });

  socket.on("getLoggedInUser", user => {
    let sql = "SELECT Nutzername FROM benutzer WHERE Token = '" + user.token + "'";
    db.all(sql, [], (err, row) => {
      if (err) throw err;
      if (row.length == 0) {
        //if there is no corresponding token return this
        socket.emit("message", "USER_NOT_FOUND");
      } else {
        //emits the username of the loggedIn User
        socket.emit("message", row[0].Nutzername);
      }
    });
  });

  socket.on("checkPasswords", user => {
    let sql = "SELECT Nutzername FROM benutzer WHERE Passwort = '" + user.password + "'";
    db.all(sql, [], (err, row) => {
      if (err) throw err;
      if (row.length == 0) {
        //if there is no corresponding token return this
        socket.emit("message", "USER_NOT_FOUND");
      }
    });
  })

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
    console.log(path)
    let httpreq = http2.get(path, function (response) {
      var responseString = '';
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

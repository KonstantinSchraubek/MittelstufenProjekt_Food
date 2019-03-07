const sqlite3 = require('sqlite3');
const express = require('express');
const bodyparser = require('body-parser');
const util = require('util');
var app = express();
app.use(bodyparser.json());
// app.use(express.static(__dirname + '/static'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

let db = new sqlite3.Database("./db/mittelstufe.sqlite3", (err) => {
if(err) {
  console.log('Error while creating the database', err);
}else{
  createTable();
}
});

const createTable = () => {
  db.run("CREATE TABLE IF NOT EXISTS benutzer(ID INTEGER PRIMARY KEY AUTOINCREMENT, Email TEXT, Nutzername TEXT, Passwort TEXT, KeyID INTEGER, Token TEXT)");
}

app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

app.get('/benutzer', (req, res) => {
  let sql = 'SELECT * FROM benutzer'
  db.all(sql, [], (err, rows) => {
    if(err) {
      throw err;
    }
    res.send(rows);
    });
  })

app.put('/benutzer', (req,res) => {

  let emp = req.body;

  if(emp.username != undefined && emp.password != undefined) {
    let sql = "UPDATE benutzer SET Email = '"+emp.email+"' WHERE Nutzername = '"+emp.username+"'"
  }

});

//Insert a benutzer
app.post('/benutzer' ,(req, res) => {
  let emp = req.body;

  if(emp.username != undefined && emp.email != undefined && emp.password != undefined && emp.KeyID != undefined)
  {
  let sqlCheck = "SELECT * FROM benutzer WHERE Nutzername = '"+emp.username+"' OR Email = '"+emp.email+"'";

  db.all(sqlCheck, [], (err, row) => {
    if(err) throw err;
    if(row.length == 0) {
      let sql = "INSERT INTO benutzer(Email,Nutzername,Passwort,KeyID) SELECT '"+emp.email+"','"+emp.username+"','"+emp.password+"','"+emp.KeyID+"' WHERE NOT EXISTS(SELECT 1 FROM benutzer WHERE Nutzername = '"+emp.username+"' OR Email = '"+emp.email+"')";

      db.run(sql, function(err, result) {
        if (err) throw err;
        res.send();
      });
    }
    else{
      res.status(400).send();    
    }  
  });
}
if(emp.username != undefined && emp.password != undefined && emp.email == undefined && emp.KeyID == undefined) {
  let emp = req.body;
  let sql = "SELECT * FROM benutzer WHERE Nutzername = '"+emp.username+"' AND Passwort = '"+emp.password+"'";
  db.all(sql, [], (err, row) => {
    if(err) throw err;
    if(row.length == 0) {
      res.status(400).send(); 
    }
    else{
      require('crypto').randomBytes(48, function(err, buffer) {
        var token = buffer.toString('hex');
        res.json({
          message: token
        });
        let sql = "UPDATE benutzer SET Token = '"+token+"' WHERE Nutzername = '"+emp.username+"'";
        db.run(sql);
      });
    }  
  });
}
if(emp.username != undefined && emp.password == undefined && emp.email == undefined && emp.KeyID == undefined) {
  let emp = req.body;
  console.log(emp);
  let sql = "SELECT * FROM benutzer WHERE Nutzername = '"+emp.username+"'";
  db.all(sql, [], (err, row) => {
    if(err) throw err;
    if(row.length == 0) {
      res.status(400).send(); 
    }
    else{
      let sqlGetKey = "SELECT KeyID FROM benutzer WHERE Nutzername = '"+emp.username+"'";
      db.all(sqlGetKey, [], (err, row) => {
        console.log(row[0].KeyID)
        res.json({
          message: row[0].KeyID
        })
      });
        // res.json({
        //   message: 
        // });
    }  
  });
}
});



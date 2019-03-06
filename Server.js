const sqlite3 = require('sqlite3');
const express = require('express');
const bodyparser = require('body-parser');
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
  console.log('Database created!');
  createTable();
}
});

const createTable = () => {
  db.run("CREATE TABLE IF NOT EXISTS benutzer(ID INTEGER PRIMARY KEY AUTOINCREMENT, Email TEXT, Nutzername TEXT, Passwort TEXT, KeyID INTEGER)");
  db.run("INSERT INTO benutzer(Email,Nutzername,Passwort,KeyID) SELECT 'test@mail.com','testUser','test123456', 5 WHERE NOT EXISTS(SELECT 1 FROM benutzer WHERE Nutzername = 'testUser' AND Email = 'test@mail.com')");
}

app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

app.get('/benutzer', (req, res) => {
  let sql = 'SELECT * FROM benutzer';
  db.all(sql, [], (err, rows) => {
    if(err) {
      throw err;
    }
    res.send(rows);
      
    });
  })

//Insert a benutzer
app.post('/benutzer' ,(req, res) => {


  let emp = req.body;

  let sql = "INSERT INTO benutzer(Email,Nutzername,Passwort,KeyID) SELECT '"+emp.email+"','"+emp.username+"','"+emp.password+"','"+emp.KeyID+"' WHERE NOT EXISTS(SELECT 1 FROM benutzer WHERE Nutzername = '"+emp.username+"' AND Email = '"+emp.email+"')";

  db.run(sql, function(err, results) {
    if (err) {
      console.log(err);
      res.status(404).send({ err: 'username_or_email_duplicate' });
    }
    res.send(results);
  });

});

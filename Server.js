const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
app.use(bodyparser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

var mysqlConnection = mysql.createConnection({
  host: '10.102.181.126',
  user: 'DataBaseUser',
  password: 'dbu',
  database: 'mittelstufe'
});

mysqlConnection.connect((err) => {
  if (!err)
    console.log('DB connection succeded.');
  else
    console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

//Get all benutzer
app.get('/benutzer', (req, res) => {
  req.setTimeout(500000);
  mysqlConnection.query('SELECT * FROM benutzer', (err, rows, fields) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
});

//Insert a benutzer
app.post('/benutzer', cors() ,(req, res) => {
  req.setTimeout(500000);
  let emp = req.body;
  var sql = "SELECT 1 FROM benutzer WHERE Benutzername = '" + emp.username + "' OR Email = '" + emp.email + "';"
  mysqlConnection.query(sql, function (err, results) {
    if (err) throw err;
    if (results.length == 0) {
      var sql = "INSERT INTO `benutzer`(`Email`, `Password`, `Benutzername`,  `KeyID`) VALUES ('" + emp.email + "','" + emp.password + "','" + emp.username + "','" + emp.KeyID + "');";
      mysqlConnection.query(sql, function (err, results) {
        if (err) throw err;
      })
      res.send(results);
    }
    else {
      res.status(404).send({ err: 'username_or_email_duplicate' });
    }
  })
});

//update a benutzers email or password => more features are possible
app.put('/benutzer', (req,res) => {
  req.setTimeout(500000);
  let emp = req.body;
  if(typeof emp.password !== "undefined") {
  var sql = "UPDATE `benutzer` SET `Password`='"+emp.password+"' WHERE `Benutzername` = '"+emp.username+"'";
  }else if(typeof emp.email !== "undefined"){
  var sql = "UPDATE `benutzer` SET `Email`='"+emp.email+"' WHERE `Benutzername` = '"+emp.username+"'";
  }
      mysqlConnection.query(sql, function (err, rows, fields) {
        if (!err)
          res.send(fields);
      });
});

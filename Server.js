const mysql = require('mysql');
const express = require('express');
const http = require('http');
var app = express();
const bodyparser = require('body-parser');
const API_KEY = '';
const API_ID = '';
app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'toor',
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
  mysqlConnection.query('SELECT * FROM benutzer', (err, rows, fields) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
});

//Insert an benutzer
app.post('/benutzer', (req, res) => {
  let emp = req.body;
  var sql = "SELECT 1 FROM benutzer WHERE Benutzername = '"+emp.username+"' OR Email = '"+emp.email+"';"
  var t = mysqlConnection.query(sql, function (err, results) {
    if (err) throw err;
    if(results.length == 0) {
      var sql = "INSERT INTO `benutzer`(`Email`, `Password`, `Benutzername`) VALUES ('" + emp.email + "','" + emp.password + "','" + emp.username + "');";
      mysqlConnection.query(sql, function (err, results) {
        if (err) throw err;
      })
    }
    else{
      res.status(404).send({error: 'username_or_email_duplicate'});
    }
  })
});
app.get('/rezepte', (req, res) => {
  let path = 'http://api.edamam.com';

  path += '/search?app_id=' + API_ID + '&app_key=' + API_KEY
  if(req.query.ingredients) {
    path += '&q=' + req.query.ingredients;
  }
  console.log(path)
  let httpreq = http.get(path, function(response) {
    var responseString = '';
    response.on("data", function (data) {
      responseString += data;
      // save all the data from response
    });
    response.on("end", function () {
      res.status(200).send(JSON.parse(responseString))
    });
  })
})

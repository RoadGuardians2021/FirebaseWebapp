// The Cloud Functions for Firebase SDK
const functions = require("firebase-functions");
//Express framework used for implementing https request
const express = require("express");
//Mysql used to connect to database
const mysql = require("mysql");
const app = express();
const cors = require("cors")({origin: true});
app.use(cors);

//Connection to the mysql database declared as a const with required parameters
const con = mysql.createConnection({
  host: "34.71.49.21",
  user: "josh",
  password: "josh34182057",
  database: "db",
});

//When the https request is empty, this returns the html code of the hosted page. Not necessary or useful, but is a working example
//of returning html in a https request
app.get("/", (req, res) => {
  res.send(`
<html>
  <head>
    <title>Time</title>
  </head>
  <body>
    <p>Append "/temperatures" to the end of the url to query 
    the Temperature table</p>
    <p>Append "/currents" to the end of the url to query the 
    Currents table</p>
  </body>
</html>`);
});

//The https request for getting all rows from the currents table
app.get("/currents", (req, res) => {
  //Gets all elements in the "Curr_Table" from the mysql database
  con.query("SELECT * from Curr_Table", function(err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

//The https request for getting all rows from the temperature table
app.get("/temperatures", (req, res) => {
  //Gets all elements in the "Temp_Table" from the mysql database
  con.query("SELECT * from Temp_Table", function(err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

//Exporting the https request functions so we can set them to be redirected to this script in the json file for firebase hosting
exports.app = functions.https.onRequest(app);

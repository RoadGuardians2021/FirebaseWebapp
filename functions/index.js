// The Cloud Functions for Firebase SDK
const functions = require("firebase-functions");
const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors")({origin: true});
app.use(cors);

const con = mysql.createConnection({
  host: "34.71.49.21",
  user: "josh",
  password: "josh34182057",
  database: "db",
});

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

app.get("/currents", (req, res) => {
  con.query("SELECT * from Curr_Table", function(err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/temperatures", (req, res) => {
  con.query("SELECT * from Temp_Table", function(err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

exports.app = functions.https.onRequest(app);

const express = require('express');
const mysql = require('mysql');
const app = express();

var con = mysql.createConnection({
    host: "34.71.49.21",
    user: "josh",
    password: "josh34182057",
    database: "db"
  });  

app.get('/', (req, res) => {
    con.query("SELECT * from Temp_Table", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Show table listening on port', port);
});
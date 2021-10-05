var mysql = require('mysql');

var con = mysql.createConnection({
  host: "157.245.113.224",
  user: "josh",
  password: "34182057roadguardiansWSU",
  database: "db"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Curr_Table", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
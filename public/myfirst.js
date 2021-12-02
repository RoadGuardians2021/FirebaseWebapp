var mysql = require('mysql');

var con = mysql.createConnection({
  host: "34.71.49.21",
  user: "josh",
  password: "josh34182057",
  database: "db"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * from Temp_Table", function (err, result, fields) {
    if (err) throw err;
    
    console.log(result);

    Object.keys(result).forEach(function(key) {
        var row = result[key];
        console.log(row.device_id);
    });
  });
});
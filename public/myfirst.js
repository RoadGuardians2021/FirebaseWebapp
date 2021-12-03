//Simple script to test connection from machine to mysql database. To use, make sure node.js is installed then run in powershell
//using "Node myfirst.js"
var mysql = require('mysql');

//Declares connection to mysql database with required parameters
var con = mysql.createConnection({
  host: "34.71.49.21",
  user: "josh",
  password: "josh34182057",
  database: "db"
});

//Connect to database
con.connect(function(err) {
  if (err) throw err;
  //Get all elements from the Temp_Table in the database, replace "Temp_Table" with "Curr_Table" to get values from there instead
  con.query("SELECT * from Temp_Table", function (err, result, fields) {
    if (err) throw err;
    
    //Log all the values in the console
    console.log(result);

    //Residual code to test formatting the values returned.
    Object.keys(result).forEach(function(key) {
        var row = result[key];
        console.log(row.device_id);
    });
  });
});
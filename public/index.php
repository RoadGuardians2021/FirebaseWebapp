<?php

//The marked out part is the ip address of the virtual machine.
echo 'Hello';

 $con = mysqli_connect('167.71.83.145','user2','4sRFJykYUqLVB226','DB'); //making the connection to the database

 if (!$con) {
     die('Connect Error:' . mysqli_connect_error()); //if connection fails, output why
 }
 else {
     echo 'Success...';
 }
 
/******************************************************************************************************************************************************************************************************************

 $curr = '-0.5';

 $sql = "INSERT INTO Curr_Table (Current) VALUES ($curr)"; //inserting data into Curr_Table

 
 if (mysqli_query($con, $sql)) {
    echo "<br>";
    echo "New record created successfully"; //if data cannot be inserted, output why
 }
 else {
     echo "Error: " . $sql . "<br>" . mysqli_error($con);
 }

/*******************************************************************************************************************************************************************************************************************

 $temp = '25.5';
 
 $sql = "INSERT INTO Temp_Table (Temperature) VALUES ($temp)"; //inserting data into Temp_Table

 if (mysqli_query($con, $sql)) {
    echo "<br>";
    echo "New record created successfully"; //if data cannot be inserted, output why
 }
 else {
     echo "Error: " . $sql . "<br>" . mysqli_error($con);
 }

/******************************************************************************************************************************************************************************************************************

 $sql = "DELETE FROM Temp_Table WHERE time < DATE_SUB(NOW(), INTERVAL 1 MINUTE)"; //delete data from database after it has been in there for 24 hours

 if (mysqli_query($con, $sql)) {
    echo "<br>";
    echo "No errors";
 }
 else {
     echo "Error: " . $sql . "<br>" . mysqli_error($con);
 }

 /*********************************************************************************************************************************************************************************************************************

 $sql = "DELETE FROM Curr_Table WHERE time < DATE_SUB(NOW(), INTERVAL 1 MINUTE)"; //delete data from database after it has been in there for 24 hours

 if (mysqli_query($con, $sql)) {
    echo "<br>";
    echo "No errors";
 }
 else {
     echo "Error: " . $sql . "<br>" . mysqli_error($con);
 }


 mysqli_close($con);

*/


?>
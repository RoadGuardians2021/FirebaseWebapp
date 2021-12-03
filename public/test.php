<?php
    //You cannot use php scripts in the html of the hosted page, so this script is unused.

    $servername = "167.71.83.145";
    $username = "user1";
    $password = "Ly3M9oAnCPNyUMgV";
    $dbname = "DB";

    // Create connection
    $conn = mysqli_connect('167.71.83.145','user1', 'Ly3M9oAnCPNyUMgV', 'DB');
    // Check connection
    if (!conn) {
      die("Connection failed: " . mysqli_connect_error());
    }
    else {
      echo 'Success';
    //   $sql = "SELECT id, firstname, lastname FROM MyGuests";
    //   $result = $conn->query($sql);

    //   if ($result->num_rows > 0) {
    //     // output data of each row
    //     while($row = $result->fetch_assoc()) {
    //       echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    //     }
    //   } else {
    //     echo "0 results";
    //   }
    //   $conn->close();
    }
?>
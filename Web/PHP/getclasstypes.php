<?php
header('Access-Control-Allow-Origin: *');
require_once('../../config/settings.php');

$connect = new mysqli($sql_host, $sql_user, $sql_pass, $sql_db);
$query = "";

// Check connection
if ($connect->connect_error) {
    echo("Connection failed: " . $connect->connect_error);
}

$sql_table = "class_type";

$query = "SELECT * from class_type;";
$result = $connect->query($query);
 
while ($row = mysqli_fetch_array($result)) {
         $resultarray[]= $row;
}

echo json_encode($resultarray);

$connect->close();

?>
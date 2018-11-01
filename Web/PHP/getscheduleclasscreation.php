<?php
header('Access-Control-Allow-Origin: *');
require_once('../../config/settings.php');

$connect = new mysqli($sql_host, $sql_user, $sql_pass, $sql_db);
$query = "";

// Check connection
if ($connect->connect_error) {
    echo("Connection failed: " . $connect->connect_error);
}
else{
	//echo "connection made";
}

$sql_table = "class";

//need to query how to get next and last date
$query = "SELECT class_schedule.id, class_type.name, class_schedule.day
			FROM class_schedule, class_type
			WHERE class_schedule.class_type_id = class_type.id;";
			
$result = $connect->query($query);
 
while ($row = mysqli_fetch_array($result)) {
         $resultarray[]= $row;
}

echo json_encode($resultarray);

$connect->close();

?>
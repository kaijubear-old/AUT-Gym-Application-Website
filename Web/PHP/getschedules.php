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

$sql_table = "class_schedule";

$query = "SELECT class_schedule.id, class_type.name, class_schedule.day, class_schedule.start_time, class_schedule.end_time, class_type.capacity
			FROM  class_schedule, class_type
			WHERE class_schedule.class_type_id = class_type.id;";
$result = $connect->query($query);
 
while ($row = mysqli_fetch_array($result)) {
         $resultarray[]= $row;
}

echo json_encode($resultarray);

$connect->close();

?>
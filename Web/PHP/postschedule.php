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
	echo "connection made";
}

//removed start and end time for refactoring
//removed radio buttons for refactoring
if(isset($_POST['scheduleData'])){
	$scheduleData = $_POST['scheduleData'];
	$sql_table = "class_schedule";

	$query = "INSERT INTO $sql_table (
	id ,
	day ,
	start_time ,
	end_time,
	class_type_id ,
	campus ,
	weekly,
	biweekly,
	warn)
	
	VALUES (
	NULL, '$scheduleData[0]', '$scheduleData[1]','$scheduleData[2]',$scheduleData[3],$scheduleData[4],'$scheduleData[5]','$scheduleData[6]',$scheduleData[7]
	);";
}
//	NULL, '$scheduleData[0]','$scheduleData[1],'$scheduleData[2],'$scheduleData[7]'

$connect->query($query);
$connect->close();

echo "query complete";

?>
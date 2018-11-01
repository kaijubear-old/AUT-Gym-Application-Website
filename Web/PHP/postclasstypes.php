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

if(isset($_POST['classNameData'])){
	$classNameData = $_POST['classNameData'];
	$sql_table = "class_type";
	
	$query = "INSERT INTO  $sql_table (
	`id` ,
	`name` ,
	`capacity`)
	VALUES (
	NULL, '$classNameData[0]','$classNameData[1]'
	);";
}

$connect->query($query);
$connect->close();

?>
<?php
header('Access-Control-Allow-Origin: *');
require_once('../../config/settings.php');

$connect = new mysqli($sql_host, $sql_user, $sql_pass, $sql_db);
$query = "";

// Check connection
if ($connect->connect_error) {
    echo("Connection failed: " . $connect->connect_error);
}

if(true){}
//if(isset($_POST['idData'])){
//	$id = $_POST['idData'];
	$sql_table = "class_type";
	
	$query = "DELETE FROM class_type WHERE id LIKE 1;";
}

$connect->query($query);
$connect->close();

?>
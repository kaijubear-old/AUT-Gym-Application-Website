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

if(isset($_POST['classData'])){
	$classData = $_POST['classData'];
	$sql_table = "class";
	
	$classData[0];//id
	$classData[1];//number
	$classData[2];//date now
	$classData[3];//date set
	
	//first, get the most recent date active
	//if no date exists, use curent date to begin loop
	//if there is a date upcoming, go to the next day
	
	$query = "SELECT date FROM $sql_table WHERE schedule_id LIKE $classData[0] ORDER BY date DESC";
	$result = $connect->query($query);
	$recentdate = null;
	while ($row = mysqli_fetch_array($result)) {
		$resultarray[]= $row;
	}

	if($resultarray[0] != null){
		$recentdate = $resultarray[0][0];
	}
	else{
		
		$query = "SELECT day FROM class_schedule WHERE id LIKE $classData[0]";
		$result = $connect->query($query);
		while ($row = mysqli_fetch_array($result)) {
			$resultarray[]= $row;
		}
		
		$dayresult = "Thursday";//$resultarray[0][0];
		
		$date = strtotime($classData[2]);//insert date from array
		$day = date("l",$date);
		if ($day == $dayresult){
			//$recentdate = date("Y-m-d", strtotime('today') - 604800);
		}
		else{
			$recentdate = date('Y-m-d', strtotime('last '+$dayresult));
		}
		
	}

	for($i = 0; $i < 2; $i++){
			$newdate = date("Y-m-d",strtotime($recentdate)+ 604800);
			/*
			$query = "INSERT INTO class (
						`id`,
						`date`,
						`active`,
						`schedule_id`,
						`attendance`)
						VALUES (
						NULL,'$newdate','1','$classData[0]','0'
						);";
			
			$connect->query($query);
			*/				
			$recentdate = $newdate;
	}
}

$connect->close();

?>
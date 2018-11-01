var url="http://http://localhost/RD%20Web/Web/";

function createClassName(dynamicData){
	
	$('#response').html("<b>Loading response...</b>");
	$.post("http://ccn1974.cmslamp14.aut.ac.nz/RD/RD%20Booking%20System/Booking%20System%20VC/Web/PHP/postclasstypes.php",{ classNameData : dynamicData	}, function(data){

		// show the response
		$('#response').html(data);

	});

	return true;

};

function createSchedule(dynamicData){
	$('#response').html("<b>Loading response...</b>");
	$.post("http://ccn1974.cmslamp14.aut.ac.nz/RD/RD%20Booking%20System/Booking%20System%20VC/Web/PHP/postschedule.php", { scheduleData : dynamicData }, function(data){

		// show the response
		//$('#response').html(dynamicData);
		$('#response').html(data);
		
	});

};

function constructClassDropdown(){
	$.get("http://ccn1974.cmslamp14.aut.ac.nz/RD/RD%20Booking%20System/Booking%20System%20VC/Web/PHP/getclasstypes.php", function(data){

		// show the response
		//$('#response').html(data);
		
		$('#class_dropdown').append("<option> </option>");
		$('#class_dropdown').append(data);
	});

};

//needs to be done better
function displaySchedules(){
	$('#response').html("<b>Loading response...</b>");
	$.get("http://ccn1974.cmslamp14.aut.ac.nz/RD/RD%20Booking%20System/Booking%20System%20VC/Web/PHP/getschedules.php", function(data){

		//show the response
		$('#response').html(data);

	});

};


$(document).ready(function() {
	//class creation
	
	$( "#class_creation_button" ).click(function() {
		var array = [$( "#class_name_textbox" ).val(),$( "#capacity_textbox" ).val()];
		createClassName(array);
	});
	
	$( "#schedule_creation_button" ).click(function() {
		
		//structure radio buttons
		
		var weekly, biweekly = 0;
		if($( "#weekly_rb" ).checked){
			weekly = 1;
		}
		else{
			biweekly = 1;
		}
		
		
		//8 values
		var array = [$( "#day_dropdown" ).val(),$( "#start_time" ).val(),$( "#end_time" ).val(),$( "#class_dropdown" ).val(),$( "#campus_dropdown" ).val(), weekly, biweekly, $( "#warning_drpodown" ).val()];
		
		//var array = [$( "#class_dropdown" ).val(),$( "#campus_dropdown" ).val(),$( "#day_dropdown" ).val(),$( "#warning_drpodown" ).val()];
		//		var array = [$( "#class_dropdown" ).val(),$( "#campus_dropdown" ).val(),$( "#day_dropdown" ).val(),$( "#start_time" ).val(),$( "#end_time" ).val(),$( "#weekly_rb" ).val(),$( "#biweekly_rb" ).val(),$( "#warning_drpodown" ).val()];

		createSchedule(array);
	});
	
	//view created classes
	$( "#schedule_button" ).click(function() {
		displaySchedules();
	});
	
	
	
});

$(function() {
		constructClassDropdown();
});

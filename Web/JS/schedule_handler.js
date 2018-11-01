var url="http://localhost/RD%20Web/Web/";

function createSchedule(dynamicData){
	$('#response').html("<b>Loading response...</b>");
	$.post(url+"PHP/postschedule.php", { scheduleData : dynamicData }, function(data){

		// show the response
		//$('#response').html(dynamicData);
		$('#response').html(data);
		
	});

};

//needs to be done better
function displaySchedules(){
	$('#response').html("<b>Loading response...</b>");
	$.get(url+"PHP/getschedules.php", function(data){

		var table = "";
		var decoded_data = JSON.parse(data);
		for(var i=0; i<decoded_data.length;i++)
		{
			table += "<tr>";
			//table += "<td>"+decoded_data.length+"</td>";
			
			table += "<td>"+decoded_data[i]['id']+"</td>";
			table += "<td>"+decoded_data[i]['name']+"</td>";
			table += "<td>"+decoded_data[i]['day']+"</td>";
			table += "<td>"+decoded_data[i]['start_time']+"</td>";
			table += "<td>"+decoded_data[i]['end_time']+"</td>";
			table += "<td>"+decoded_data[i]['capacity']+"</td>";
			table += "<td>"+decoded_data[i]['attendance']+"</td>";
			table += "<td><input id=\"active-check\" type=\"checkbox\" class=\"custom-control custom-checkbox custom-contol-input\"></input></td>";
			table += "<td><button class=\"btn btn-sm\">Delete</button></td>";
			table += "</tr>";
		}
		//table +="</tbody></table>";
		$('#table_body').html(table);

	});

};

function constructClassDropdown(){
	$.get(url+"PHP/getclasstypes.php", function(data){

		// show the response
		//$('#response').html(data);
		
		$('#class_dropdown').append("<option id=\"0\"> </option>");
		
		var decoded_data = JSON.parse(data);
		for(var i=0; i<decoded_data.length;i++)
		{				
			$('#class_dropdown').append("<option value = \""+decoded_data[i]['id']+"\">"+decoded_data[i]['name']+" {"+decoded_data[i]['capacity']+"}</option>");
		}
		
	});

};


$(document).ready(function() {
	
	$( "#schedule_creation_button" ).click(function() {
		
		//structure radio buttons
		var weekly, biweekly = 0;
		if($( "#weekly" ).checked){
			weekly = 1;
		}
		else{
			biweekly = 1;
		}
		
		
		//8 values
		var array = [$( "#day_dropdown" ).val(),$( "#start_time" ).val(),$( "#end_time" ).val(),$( "#class_dropdown" ).getAttribute("value"),$( "#campus_dropdown" ).val(), weekly, biweekly, $( "#warning_drpodown" ).val()];
		
		//var array = [$( "#class_dropdown" ).val(),$( "#campus_dropdown" ).val(),$( "#day_dropdown" ).val(),$( "#warning_drpodown" ).val()];
		//		var array = [$( "#class_dropdown" ).val(),$( "#campus_dropdown" ).val(),$( "#day_dropdown" ).val(),$( "#start_time" ).val(),$( "#end_time" ).val(),$( "#weekly_rb" ).val(),$( "#biweekly_rb" ).val(),$( "#warning_drpodown" ).val()];

		createSchedule(array);
	});

	
	
});

$(function() {
	displaySchedules();
	constructClassDropdown();
});

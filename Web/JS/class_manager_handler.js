var url="http://localhost/RD%20Web/Web/";

//need to add responsive checkboxes
//need to figure out how to search
//need to figure out how to get first and alst date
//need to add warning based off warning thing

function showSchedules(){
	$('#response').html("<b>Loading response...</b>");
	$.get(url+"/PHP/getschedules.php", function(data){

		var htmlstyle = "";
			var decoded_data = JSON.parse(data);
			for(var i=0; i<decoded_data.length;i++)
			{
				htmlstyle +="<div class=\"row mb-2\" id=\"pop"+decoded_data[i]['id']+"\">"
				htmlstyle +="	<div class=\"card flex-md-row shadow-sm h-md-250 col-md\">"
				htmlstyle +="		<div class=\"card-body d-flex flex-column align-items-start col-md-9\">"
				htmlstyle +="			<div class=\"mb-0 text-muted\">"+decoded_data[i]['id']+"</div>"
				htmlstyle +="			<h3 class=\"mb-0 text-dark\">"+decoded_data[i]['name']+"</h3>"
				htmlstyle +="			<div class=\"mb-1 text-muted\">"+decoded_data[i]['day']+"</div>"
				htmlstyle +="			<p class=\"mb-1\">Next Class: <b>1/11/2018</b></p>"
				htmlstyle +="			<p class=\"mb-1\">Last Class: <b>8/11/2018</b></p>"
				htmlstyle +="			</div>"
				htmlstyle +="		<div class=\"card-body d-flex flex-column align-items-start col-md-3\">"
				htmlstyle +="			<button class=\"btn btn-primary btn-sm-6 btn-block mb-2\" type=\"submit\">Add Classes</button>"
				htmlstyle +="			<div class=\"form-group\">"
				htmlstyle +="				<label class=\"mb-1\" for=\"number\">Number:</label>"
				htmlstyle +="				<input class=\" form-group-sm col-sm-5\" id=\"number\" type=\"number\" >"
				htmlstyle +="			</div>"
				htmlstyle +="			<div class=\"custom-control custom-checkbox\">"
				htmlstyle +="				  <input type=\"checkbox\" class=\"custom-control-input\" name =\"checkbox-date\" id=\"next-available\" checked>"
				htmlstyle +="				  <label class=\"custom-control-label\" for=\"next-available\">Next Available</label>"
				htmlstyle +="			</div>"
				htmlstyle +="			<div class=\"custom-control custom-checkbox\">"
				htmlstyle +="				  <input type=\"checkbox\" class=\"custom-control-input\ name =\"checkbox-date\" id=\"date-from\">"
				htmlstyle +="				  <label class=\"custom-control-label\" for=\"date-from\">From:</label>"
				htmlstyle +="				  <input type=\"date\" class=\"form-control form-control-sm\"></input>"
				htmlstyle +="			</div>"
				htmlstyle +="		</div>"
				htmlstyle +="	</div>"
				htmlstyle +="</div>"
			}
		$('#populator-area').html(htmlstyle);

	});

};

$(document).ready(function() {

	
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
	
	
	
});

$(function() {
		showSchedules();
});

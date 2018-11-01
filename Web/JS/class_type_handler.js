var url="http://localhost/RD%20Web/Web/";

function createClassName(dynamicData){
	
	$.post(url+"PHP/postclasstypes.php",{ classNameData : dynamicData	}, function(data){

	});

	return true;

};

function deleteClassType(buttonData){
	
	alert(buttonData);
	
	$.post(url+"PHP/deleteclasstypes.php",{buttonData}, function(data){
		
	});

	return true;

};

function displayClassNames(){
	//$('#response').html("<b>Loading response...</b>");
	$.get(url+"PHP/getclasstypes.php", function(data){

		//show the response
		//$('#response').html(json_decode(data));
		var table = "";
		var decoded_data = JSON.parse(data);
		for(var i=0; i<decoded_data.length;i++)
		{
			table += "<tr>";
			//table += "<td>"+decoded_data.length+"</td>";
			
			table += "<td>"+decoded_data[i]['id']+"</td>";
			table += "<td>"+decoded_data[i]['name']+"</td>";
			table += "<td>"+decoded_data[i]['capacity']+"</td>";
			table += "<td><button class=\"btn btn-sm\">Edit</button></td>";
			table += "<td><button class=\"btn btn-sm\" id=\"delete\" value=\""+decoded_data[i]['id']+"\">Delete</button></td>";
			table += "</tr>";
			
 
		}
		//table +="</tbody></table>";
		$('#table_body').html(table);
		//document.getElementById("delete").setAttribute("onclick", "deleteClassType(this.value);");

	});

};


$(document).ready(function() {
	
	$( "#class_creation_button" ).click(function() {
		var array = [$( "#class_name_textbox" ).val(),$( "#capacity_textbox" ).val()];
		createClassName(array);
	});
	
	$( "#delete" ).click(function() {
		var array = [$(this).attr("value")];
		deleteClassType(array);
	});
	
});

$(function() {
	displayClassNames();
});

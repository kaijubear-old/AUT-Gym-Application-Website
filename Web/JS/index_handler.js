//need week/month viewing

var url="http://localhost/RD%20Web/Web/";

function displayClasses(){
	//$('#response').html("<b>Loading response...</b>");
	$.get(url+"PHP/getclasses.php", function(data){

		//show the response
		//$('#response').html(json_decode(data));
		var table = "";
		var decoded_data = JSON.parse(data);
		for(var i=0; i<decoded_data.length;i++)
		{
			table += "<tr>";
			//table += "<td>"+decoded_data.length+"</td>";
			
			//create functin to convert data nto plaintext based on the classificaion of the data
			table += "<td>"+decoded_data[i]['id']+"</td>";
			table += "<td>"+decoded_data[i]['name']+"</td>";
			table += "<td>"+decoded_data[i]['day']+"</td>";
			table += "<td>"+decoded_data[i]['date']+"</td>";
			table += "<td>"+decoded_data[i]['start_time']+"</td>";
			table += "<td>"+decoded_data[i]['end_time']+"</td>";
			table += "<td>"+plaintext('active',decoded_data[i]['active'])+"</td>";
			table += "<td>"+decoded_data[i]['capacity']+"</td>";
			table += "<td>"+decoded_data[i]['attendance']+"</td>";
			table += "</tr>";
		}
		//table +="</tbody></table>";
		$('#table_body').html(table);

	});

};

//create function to convert into plaintext
function plaintext(dataclass,data){
	
	switch(dataclass){
		case 'active': 
			if(data == 0){
				return "No";
			}
			else{
				return "Yes";
			}
			break;
		default:
			return data;
	}
	
}

//display classes via dropdown selection

$(document).ready(function() {
	
	
});

$(function() {
	displayClasses()
});

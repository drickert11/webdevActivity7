var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	document.getElementById("name").focus();
};

function displayResults() {
	var total=0;
	var high=0;
	var highName="";
	for(var i=0; i< scores.length; i++){
		total+= parseFloat(scores[i]);
		if(high<scores[i]){
			high=scores[i];
			highName=names[i];
		}
	}

	var avg= total/scores.length;
	
	//get the div tag
	var parNode=document.getElementById("results");
	//clear previous
	while(parNode.firstChild){
		parNode.removeChild(parNode.firstChild);
	}
	
	//header (h2) for the results
	var head2 = document.createElement("h2");
	var result= document.createTextNode("Results: ");
	head2.appendChild(result);
	parNode.appendChild(head2);
	
	//place the results as (p) under the header
	var outputEl = document.createElement("p");
	outputEl.innerHTML = "Highest score is "+ highName+" with a score of "+high+"	Average score: "+ avg;
	parNode.appendChild(outputEl);
}

function addScore(){
	var newName= document.getElementById("name").value;
	var newScore= document.getElementById("score").value;	
	//data validation
	if(newName==""||(!(parseFloat(newScore)<=100 && parseFloat(newScore)>=0))){
		newName= null;	
		newScore= null;
		alert("You must enter a name and a valid score")
	}	
	else{
		names.push(newName);
		scores.push(newScore);
	}
	document.getElementById("name").value="";
	document.getElementById("score").value="";
	document.getElementById("name").focus();
}

function displayScores(){

	var table = document.getElementById("scores_table");
	
	//clear previous to prevent repeat
	while(table.firstChild){
		table.removeChild(table.firstChild);
	}
	
	var head2 = document.createElement("h2");
	head2.innerHTML="Scores";
	var parNode = document.getElementById("scores_table");
	parNode.appendChild(head2);
	
	//table header
	var tRow = document.createElement("tr");
	
	var tHead1 = document.createElement("th");
	var tHead2 = document.createElement("th");
	
	tHead1.innerHTML = "Names";
	tHead2.innerHTML = "Scores";
	
	tRow.appendChild(tHead1);
	tRow.appendChild(tHead2);
	
	table.appendChild(tRow);
	
		//want to look at this later
		//var tRow = tHead.createElement("tr");
		
		//tRow.createTHead().innerHTML= "Names";
		//tRow.createTHead().innerHTML= "Scores";
		
	for(var i=0; i<scores.length; i++){
		//table rows
		tRow = document.createElement("tr");
		var cell1= document.createElement("td");
		var cell2= document.createElement("td");
		
		cell1.innerHTML = names[i];
		cell2.innerHTML = scores[i];
		
		tRow.appendChild(cell1);
		tRow.appendChild(cell2);
		
		table.appendChild(tRow);
		
		//look at this later
		//table.insertRow(i).insertCell(0).innerHTML= names[i];
		//table.insertRow(i).insertCell(1).innerHTML= scores[i];
	}

}





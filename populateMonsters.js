function populateMonsters(){

	var div = document.getElementById('monsters');
	
	var col = [];

	if(localStorage.getItem('MONS')!=null){
		var localStorageRune = JSON.parse(localStorage.getItem('MONS'));
		var MONS = localStorageRune.nodes;
		var singleRune = MONS[0]

		for(var key in singleRune){
			col.push(key);
		}

		var numCols = col.length;
		var numRunes = MONS.length;
	}

	var table = document.createElement("table");

	var tr = table.insertRow(-1);

	for(var i = 0; i < numCols; i++){
		var th = document.createElement("th");
		th.innerHTML = col[i];
		tr.appendChild(th);
	}

	// console.log(table);
	var divContainer = document.getElementById("runes");
	divContainer.innerHTML = "";
	divContainer.appendChild(table);

	for (var i = 0; i < numRunes ; i++) {

		tr = table.insertRow(-1);

		for (var j = 0; j < col.length; j++) {
		    var tabCell = tr.insertCell(-1);
		    tabCell.innerHTML = MONS[i][col[j]];
		}
	}

}

function getLocalStorageDataToHTML(localKey, divID){

	var div = document.getElementById(divID);
	
	var col = [];

	if(localStorage.getItem(localKey)!=null){
		var localStorageRune = JSON.parse(localStorage.getItem(localKey));
		var DATA = localStorageRune.nodes;
		var singleRune = DATA[0]

		for(var key in singleRune){
			col.push(key);
		}

		var numCols = col.length;
		var numRunes = DATA.length;
	}

	var table = document.createElement("table");

	var tr = table.insertRow(-1);

	for(var i = 0; i < numCols; i++){
		var th = document.createElement("th");
		th.innerHTML = col[i];
		tr.appendChild(th);
	}

	// console.log(table);
	var divContainer = document.getElementById(divID);
	divContainer.innerHTML = "";
	divContainer.appendChild(table);

	for (var i = 0; i < numRunes ; i++) {

		tr = table.insertRow(-1);

		for (var j = 0; j < col.length; j++) {
		    var tabCell = tr.insertCell(-1);
		    tabCell.innerHTML = DATA[i][col[j]];
		}
	}

}
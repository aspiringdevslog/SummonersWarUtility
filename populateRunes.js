function populateRunes(){

	var div = document.getElementById('runes');
	
	var col = [];

	if(localStorage.getItem('RUNES')!=null){
		var localStorageRune = JSON.parse(localStorage.getItem('RUNES'));
		var RUNES = localStorageRune.nodes;
		var singleRune = RUNES[0]

		for(var key in singleRune){
			col.push(key);
		}

		var numCols = col.length;
		var numRunes = RUNES.length;
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
		    tabCell.innerHTML = RUNES[i][col[j]];
		}
	}

}


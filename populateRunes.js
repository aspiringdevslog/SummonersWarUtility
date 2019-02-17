function populateRunes(){
	var RUNES = JSON.parse(localStorage.getItem('RUNES'));
	// console.log(RUNES);

//  https://stackoverflow.com/questions/5677799/how-to-append-data-to-div-using-javascript
// var div = document.getElementById('divID');

// div.innerHTML += 'Extra stuff';

	var div = document.getElementById('runes');
	

	var col = [];

	var singleRune = RUNES[0]

	console.log(singleRune);

	for(var key in singleRune){
		col.push(key);
	}

	var table = document.createElement("table");

	var tr = table.insertRow(-1);

	for(var i = 0; i < col.length; i++){
		var th = document.createElement("th");
		th.innerHTML = col[i];
		tr.appendChild(th);
	}

	console.log(table);
	var divContainer = document.getElementById("runes");
	divContainer.innerHTML = "";
	divContainer.appendChild(table);

	for (var i = 0; i < RUNES.length; i++) {

		tr = table.insertRow(-1);

		for (var j = 0; j < col.length; j++) {
		    var tabCell = tr.insertCell(-1);
		    tabCell.innerHTML = RUNES[i][col[j]];
		}
	}

}

// "base_value":rune.base_value,
// "stars":rune.class,
// "defaultGrade":runeQuality(rune.extra), // this is the default grade of the rune, i.e. pre level up
// "occupied_id":rune.occupied_id,
// "occupied_type":rune.occupied_type,

// "prefix_stat": runeStatType(rune.prefix_eff[0]),
// "prefix_value":  rune.prefix_eff[1],
// // "prefix_eff":rune.prefix_eff,
// // "pri_eff":rune.pri_eff,

// "primary_stat": runeStatType(rune.pri_eff[0]),
// "primary_value": rune.pri_eff[1],

// "sec_01_stat":0,
// "sec_01_value":0,
// "sec_01_grindValue":0,
// "sec_01_isGrinded":0,

// "sec_02_stat":0,
// "sec_02_value":0,
// "sec_02_grindValue":0,
// "sec_02_isGrinded":0,

// "sec_03_stat":0,
// "sec_03_value":0,
// "sec_03_grindValue":0,
// "sec_03_isGrinded":0,

// "sec_04_stat":0,
// "sec_04_value":0,
// "sec_04_grindValue":0,
// "sec_04_isGrinded":0,


// "rank":runeQuality(rune.rank), // this is the current rank of the rune, i.e. level 12 = legend, etc
// "rune_id":rune.rune_id,

// "sell_value":rune.sell_value,
// "set_id":runeSet(rune.set_id),
// "slot_no":rune.slot_no,
// "upgrade_curr":rune.upgrade_curr,
// "upgrade_limit":rune.upgrade_limit,
// "wizard_id":rune.wizard_id,
// "wizard_id":rune.wizard_id,
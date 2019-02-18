// RUNE ATTRIBUTES
// base_value: 208080
// class: 5
// extra: 3
// occupied_id: 0
// occupied_type: 2
// prefix_eff: (2) [12, 6]
// pri_eff: (2) [3, 15]
// rank: 3
// rune_id: 12336416728
// sec_eff: (2) [Array(4), Array(4)]
// sell_value: 12404
// set_id: 23
// slot_no: 6
// upgrade_curr: 0
// upgrade_limit: 15
// wizard_id: 4051550

function processRunes(runeJSON){
	// console.log(runeJSON)

	// console.log(runeJSON);
	const runeHeap = new Heap();
	if(localStorage.getItem('RUNES')!= null){
		// runeHeap = JSON.parse(localStorage.getItem('RUNES'));
		// console.log(JSON.parse(localStorage.getItem('RUNES')));
		var localStorageHeap = JSON.parse(localStorage.getItem('RUNES'));

		// console.log("existing runes:")
		// console.log(localStorageHeap.nodes);
		var existingRunes = localStorageHeap.nodes;
		// console.log(localStorageHeap.nodes);

		for(rune in existingRunes){
			// console.log(existingRunes[rune]);
			runeHeap.push(existingRunes[rune]);
		}

		// runeJSON.push(localStorageHeap.nodes);

		// console.log(runeHeap);
		// console.log(localStorageHeap.nodes);
	}
	
	// console.log(runeList);

	for (var key in runeJSON){ // each key in runeJSON is an individual rune
		if(runeJSON.hasOwnProperty(key)){
			// console.log(key);
			
			var rune = runeJSON[key] // get each rune
			// console.log(rune);

				var runeStruct ={
					"base_value":rune.base_value,
					"stars":rune.class,
					// "defaultGrade":runeQuality(rune.extra), // this is the default grade of the rune, i.e. pre level up
					"occupied_id":rune.occupied_id,
					"occupied_type":rune.occupied_type,

					"prefix_stat": runeStatType(rune.prefix_eff[0]),
					"prefix_value":  rune.prefix_eff[1],
					// "prefix_eff":rune.prefix_eff,
					// "pri_eff":rune.pri_eff,

					"primary_stat": runeStatType(rune.pri_eff[0]),
					"primary_value": rune.pri_eff[1],

					"sec_01_stat":0,
					"sec_01_value":0,
					"sec_01_grindValue":0,
					"sec_01_isGrinded":0,
	
					"sec_02_stat":0,
					"sec_02_value":0,
					"sec_02_grindValue":0,
					"sec_02_isGrinded":0,
	
					"sec_03_stat":0,
					"sec_03_value":0,
					"sec_03_grindValue":0,
					"sec_03_isGrinded":0,
	
					"sec_04_stat":0,
					"sec_04_value":0,
					"sec_04_grindValue":0,
					"sec_04_isGrinded":0,


					"rank":runeQuality(rune.rank), // this is the current rank of the rune, i.e. level 12 = legend, etc
					"rune_id":rune.rune_id,
					
					// "sell_value":rune.sell_value,
					"set_id":runeSet(rune.set_id),
					"slot_no":rune.slot_no,
					"upgrade_curr":rune.upgrade_curr,
					// "upgrade_limit":rune.upgrade_limit,
					"wizard_id":rune.wizard_id,
					// "wizard_id":rune.wizard_id,
				};


				for(var i = 0; i < rune.sec_eff.length; i++){

					if(i==0){
						runeStruct.sec_01_stat = runeStatType(rune.sec_eff[0][0]);
						runeStruct.sec_01_value = rune.sec_eff[0][1];
						runeStruct.sec_01_grindValue = rune.sec_eff[0][2];
						runeStruct.sec_01_isGrinded = rune.sec_eff[0][3];
					} else if(i==1){
						runeStruct.sec_02_stat = runeStatType(rune.sec_eff[1][0]);
						runeStruct.sec_02_value = rune.sec_eff[1][1];
						runeStruct.sec_02_grindValue = rune.sec_eff[1][2];
						runeStruct.sec_02_isGrinded = rune.sec_eff[1][3];
					} else if(i==2){
						runeStruct.sec_03_stat = runeStatType(rune.sec_eff[2][0]);
						runeStruct.sec_03_value = rune.sec_eff[2][1];
						runeStruct.sec_03_grindValue = rune.sec_eff[2][2];
						runeStruct.sec_03_isGrinded = rune.sec_eff[2][3];
					} else if(i==3){
						runeStruct.sec_04_stat = runeStatType(rune.sec_eff[3][0]);
						runeStruct.sec_04_value = rune.sec_eff[3][1];
						runeStruct.sec_04_grindValue = rune.sec_eff[3][2];
						runeStruct.sec_04_isGrinded = rune.sec_eff[3][3];
					}

				}

				// console.log(runeStruct);

				runeHeap.push(runeStruct);
				// runeHeap.push(runeStruct);

		}
	}

	// console.log(runeList)
	// console.log(runeHeap);

	// https://coderwall.com/p/ewxn9g/storing-and-retrieving-objects-with-localstorage-html5
	localStorage.setItem("RUNES", JSON.stringify(runeHeap));

	// console.log(JSON.parse(localStorage.getItem('RUNES')));

}

function runeStatType(stat){
	switch(stat) {
	  case 0:
	    return "";
	    break;		
	  case 1:
	    return "HP Flat";
	    break;
	  case 2:
	    return "HP %";
	    break;
	  case 3:
	    return "ATK Flat";
	    break;
	  case 4:
	    return "ATK %";
	    break;
	  case 5:
	    return "DEF Flat";
	    break;		
	  case 6:
	    return "DEF %";
	    break;
	  case 8:
	    return "SPD";
	    break;
	  case 9:
	    return "CRATE";
	    break;
	  case 10:
	    return "CDMG";
	    break;	
	  case 11:
	    return "RES";
	    break;
	  case 12:
	    return "ACC";
	    break;	        
	  default:
	    return "NULL"	    
	}
}

function runeClass(runeClass){
	switch(runeClass) {
	  case 0:
	    return "Common";
	    break;		
	  case 1:
	    return "Magic";
	    break;
	  case 2:
	    return "Rare";
	    break;
	  case 3:
	    return "Hero";
	    break;
	  case 4:
	    return "Legendary";
	    break;
	  default:
	    return "NULL"	    
	}
}

function runeQuality(quality){
	switch(quality) {
	  case 1:
	    return "Common";
	    break;		
	  case 2:
	    return "Magic";
	    break;
	  case 3:
	    return "Rare";
	    break;
	  case 4:
	    return "Hero";
	    break;
	  case 5:
	    return "Legend";
	    break;
	  default:
	    return "NULL"	    
	}
}

function runeSet(setId){
	switch(setId) {
	  case 1:
	    return "Energy";
	    break;
	  case 2:
	    return "Guard";
	    break;
	  case 3:
	    return "Swift";
	    break;
	  case 4:
	    return "Blade";
	    break;
	  case 5:
	    return "Rage";
	    break;
	  case 6:
	    return "Focus";
	    break;
	  case 7:
	    return "Endure";
	    break;
	  case 8:
	    return "Fatal";
	    break;
	  case 10:
	    return "Despair";
	    break;
	  case 11:
	    return "Vampire";
	    break;
	  case 13:
	    return "Violent";
	    break;
	  case 14:
	    return "Nemesis";
	    break;
	  case 15:
	    return "Will";
	    break;
	  case 16:
	    return "Shield";
	    break;
	  case 17:
	    return "Revenge";
	    break;
	  case 18:
	    return "Destroy";
	    break;	
	  case 19:
	    return "Fight";
	    break;
	  case 20:
	    return "Determination";
	    break;
	  case 21:
	    return "Enhance";
	    break;
	  case 22:
	    return "Accuracy";
	    break;
	  case 23:
	    return "Tolerance";
	    break;
	  case 99:
	    return "Immemorial";
	    break;	        
	  default:
	    return "NULL"
	}
}



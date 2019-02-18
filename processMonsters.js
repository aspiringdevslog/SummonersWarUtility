// accuracy: 0
// atk: 582
// attribute: 1
// building_id: 0
// class: 6
// con: 659
// costume_master_id: 0
// create_time: "2017-07-18 18:56:40"
// critical_damage: 50
// critical_rate: 15
// def: 571
// exp_gain_rate: 0
// exp_gained: 0
// experience: 1005420
// homunculus: 0
// homunculus_name: ""
// island_id: 2
// pos_x: 1
// pos_y: 9
// resist: 15
// runes: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// skills: (3) [Array(2), Array(2), Array(2)]
// source: 0
// spd: 97
// trans_items: []
// unit_id: 4206253322
// unit_level: 40
// unit_master_id: 15911
// wizard_id: 4051550


function processMon(monJSON){

	// console.log(monJSON);

	const monHeap = new Heap();
	const monRuneHeap = new Heap();
	var monRuneList = [];

	for (var key in monJSON){
		if(monJSON.hasOwnProperty(key)){
			var monster = monJSON[key];
			// console.log(monster);

				var monStruct ={
					"accuracy":monster.accuracy,
					"atk":monster.atk,
					"attribute":attribute(monster.attribute),
					"building_id":monster.building_id,
					"class":monster.class,
					"con":monster.con,
					"costume_master_id":monster.costume_master_id,
					"create_time":monster.create_time,
					"critical_damage":monster.critical_damage,
					"critical_rate":monster.critical_rate,
					"def":monster.def,
					"exp_gain_rate":monster.exp_gain_rate,
					"exp_gained":monster.exp_gained,
					"experience":monster.experience,
					"homunculus":monster.homunculus,
					"homunculus_name":monster.homunculus_name,
					"island_id":monster.island_id,
					"pos_x":monster.pos_x,
					"pos_y":monster.pos_y,
					"resist":monster.resist,
					"runes":monster.runes,
					"skills":monster.skills,
					"source":monster.source,
					"spd":monster.spd,
					"trans_items":monster.trans_items,
					"unit_id":monster.unit_id,
					"unit_level":monster.unit_level,
					"unit_master_id":monster.unit_master_id,
					"wizard_id":monster.wizard_id,
				}
				
			var numRunesEquipped = monster.runes.length;

			for(var i = 0; i < numRunesEquipped; i++  ){
				monRuneHeap.push(monster.runes[i]);
				monRuneList.push(monster.runes[i]);
			}

			monHeap.push(monStruct);

		}
	}

		// console.log(monList);
		localStorage.setItem("MONS", JSON.stringify(monHeap));
		// console.log(monRuneHeap);

		processRunes(monRuneList);
	//TODO: store the monsters list details in an appropriate data structure

}


function attribute(attributeId){
	switch(attributeId) {	
	  case 1:
	    return "Water";
	    break;
	  case 2:
	    return "Fire";
	    break;
	  case 3:
	    return "Wind";
	    break;
	  case 4:
	    return "Light";
	    break;
	  case 5:
	    return "Dark";
	    break;			        
	  default:
	    return "NULL"	    
	}
}

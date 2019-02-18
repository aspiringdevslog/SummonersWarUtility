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


// accuracy: 0
// archetype: "defense"
// awaken_bonus: ""
// awaken_mats_dark_high: 0
// awaken_mats_dark_low: 0
// awaken_mats_dark_mid: 0
// awaken_mats_fire_high: 0
// awaken_mats_fire_low: 0
// awaken_mats_fire_mid: 0
// awaken_mats_light_high: 0
// awaken_mats_light_low: 0
// awaken_mats_light_mid: 0
// awaken_mats_magic_high: 0
// awaken_mats_magic_low: 0
// awaken_mats_magic_mid: 0
// awaken_mats_water_high: 0
// awaken_mats_water_low: 0
// awaken_mats_water_mid: 0
// awaken_mats_wind_high: 0
// awaken_mats_wind_low: 0
// awaken_mats_wind_mid: 0
// awakens_from: null
// awakens_to: null
// base_attack: 66
// base_defense: 96
// base_hp: 1170
// base_stars: 1
// bestiary_slug: "12302-fire-forest-keeper"
// can_awaken: false
// com2us_id: 12302
// craft_cost: null
// crit_damage: 50
// crit_rate: 15
// element: "fire"
// family_id: 12300
// farmable: false
// fusion_food: false
// homunculus: false
// image_filename: "unit_icon_0010_2_1.png"
// is_awakened: false
// leader_skill: null
// max_lvl_attack: 362
// max_lvl_defense: 527
// max_lvl_hp: 6420
// name: "Forest Keeper"
// obtainable: true
// raw_attack: 33
// raw_defense: 48
// raw_hp: 39
// resistance: 15
// skill_ups_to_max: 7
// skills: [4]
// source: (2) [36, 39]
// speed: 88
// transforms_into: null
// __proto__: Object

function processMon(monJSON){
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
	var bestiaryMap = new Map();
	bestiaryMap = getMonsterBestiary();

	console.log(bestiaryMap.get(12302));
	// console.log(monBestiary);
	// console.log(monJSON);

	const monHeap = new Heap();
	const monRuneHeap = new Heap();
	var monRuneList = [];

	for (var key in monJSON){
		if(monJSON.hasOwnProperty(key)){
			var monster = monJSON[key];
			// console.log(monster);

				var monStruct ={

					// unncessary information has been commented out
					// "accuracy":monster.accuracy,
					// "atk":monster.atk,
					"attribute":attribute(monster.attribute),
					// "building_id":monster.building_id,
					"class":monster.class,
					"con":monster.con,
					"costume_master_id":monster.costume_master_id,
					"create_time":monster.create_time,
					// "critical_damage":monster.critical_damage,
					// "critical_rate":monster.critical_rate,
					// "def":monster.def,
					// "exp_gain_rate":monster.exp_gain_rate,
					// "exp_gained":monster.exp_gained,
					// "experience":monster.experience,
					// "homunculus":monster.homunculus,
					"homunculus_name":monster.homunculus_name,
					// "island_id":monster.island_id,
					// "pos_x":monster.pos_x,
					// "pos_y":monster.pos_y,
					"resist":monster.resist,
					"runes":monster.runes,
					"skills":monster.skills,
					// "source":monster.source,
					// "spd":monster.spd,
					// "trans_items":monster.trans_items,
					"unit_id":monster.unit_id,
					"unit_level":monster.unit_level,
					"unit_master_id":monster.unit_master_id,
					"wizard_id":monster.wizard_id,

					"BESTIARY_name":bestiaryMap.get(monster.unit_master_id).name,
					"BESTIARY_accuracy":bestiaryMap.get(monster.unit_master_id).accuracy,
					"BESTIARY_crit_damage":bestiaryMap.get(monster.unit_master_id).crit_damage,
					"BESTIARY_crit_rate":bestiaryMap.get(monster.unit_master_id).crit_rate,
					"BESTIARY_leader_skill":bestiaryMap.get(monster.unit_master_id).leader_skill,
					"BESTIARY_max_lvl_attack":bestiaryMap.get(monster.unit_master_id).max_lvl_attack,
					"BESTIARY_max_lvl_defense":bestiaryMap.get(monster.unit_master_id).max_lvl_defense,
					"BESTIARY_max_lvl_hp":bestiaryMap.get(monster.unit_master_id).max_lvl_hp,
					"BESTIARY_resistance":bestiaryMap.get(monster.unit_master_id).resistance,
					"BESTIARY_bestiary_skills":bestiaryMap.get(monster.unit_master_id).skills,
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
		console.log(monRuneHeap);

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

function getMonsterName(monId){

}


function getMonsterBestiary(){
	
	var monBestiaryJSON = JSON.parse(localStorage.getItem("BESTIARY_MONSTERS"));
	var monBestiary = monBestiaryJSON.nodes;
	// console.log(monBestiary);

	var bestiaryMap = new Map();

	for(monster in monBestiary){
		var monData = monBestiary[monster];
		var monId = monBestiary[monster].com2us_id;
		bestiaryMap.set(monId, monData);

		// console.log(monster);
		// console.log(monId);
		// console.log(monData);


	}

	return bestiaryMap;
}
function processAll(json){

	// monsterValues = json.unit_list;
	// // console.log(monsterValues);

	// //TODO: store the monsters list details in an appropriate data structure

// Guide on looping through JSON
// https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object

	for (var key in json){
		if(json.hasOwnProperty(key)){
			// console.log(key);
			// console.log(json[key]);
		
			if(key == "runes"){
				if(localStorage.RUNES == null){
					console.log("Processing runes...");
					processRunes(json[key]);
					populateRunes();
				} else {
					console.log("Runes data already exists!");
					populateRunes();
				}
				
			}



		}
	}




}
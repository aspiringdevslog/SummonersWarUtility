function processMon(json){

	monsterValues = json.unit_list;
	// console.log(monsterValues);

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

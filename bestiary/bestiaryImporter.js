// document.getElementById('import').onclick = function() {
function loadBestiaryJSON(){
  // var files = document.getElementById('selectFile').files;

  // var files = loadJSON();

  // var JSONdata;
  // https://stackoverflow.com/questions/15764844/jquery-getjson-save-result-into-variable
    jQuery.getJSON("/bestiary/bestiary_data.json", processBestiary);
};


function processBestiary(result){

    const monster = new Heap();
    const skill = new Heap();
    const leaderskill = new Heap();
    const skilleffect = new Heap();
    const skilleffectdetail = new Heap();
    const scalingstat = new Heap();


    for(key in result){
      // console.log(result[key].model);
      if(result[key].model == "bestiary.monster"){
        monster.push(result[key].fields); // access monster name by result[key].fields.name
      } 
      else if(result[key].model == "bestiary.skill"){
        skill.push(result[key].fields); 
      } 
      else if(result[key].model == "bestiary.leaderskill"){
        leaderskill.push(result[key].fields); 
      } 
      else if(result[key].model == "bestiary.skilleffect"){
        skilleffect.push(result[key].fields); 
      } 
      else if(result[key].model == "bestiary.skilleffectdetail"){
        skilleffectdetail.push(result[key].fields); 
      } 
      else if(result[key].model == "bestiary.scalingstat"){
        scalingstat.push(result[key].fields); 
      } 

    }


    localStorage.setItem("BESTIARY_MONSTERS", JSON.stringify(monster));
    localStorage.setItem("BESTIARY_SKILL", JSON.stringify(skill));
    localStorage.setItem("BESTIARY_LEADERSKILL", JSON.stringify(leaderskill));
    // localStorage.setItem("BESTIARY_SKILLEFFECT", JSON.stringify(skilleffect));
    // localStorage.setItem("BESTIARY_SKILLEFFECTDETAILS", JSON.stringify(skilleffectdetail));
    // localStorage.setItem("BESTIARY_SCALINGSTAT", JSON.stringify(scalingstat));

    // console.log(monster);
    // console.log(skill);
    // console.log(leaderskill);
    // console.log(skilleffect);
    // console.log(skilleffectdetail);
    // console.log(scalingstat);
  

}

// // bestiary.monster
// 2043bestiaryImporter.js:18 bestiary.skill
// 190bestiaryImporter.js:18 bestiary.leaderskill
// 70bestiaryImporter.js:18 bestiary.skilleffect
// 2231bestiaryImporter.js:18 bestiary.skilleffectdetail
// 15bestiaryImporter.js:18 bestiary.scalingstat
// 65bestiaryImporter.js:18 bestiary.homunculusskill
// 46bestiaryImporter.js:18 bestiary.source
// 19bestiaryImporter.js:18 bestiary.fusion
// 20bestiaryImporter.js:18 bestiary.building
// 18bestiaryImporter.js:18 bestiary.craftmaterial
// 18bestiaryImporter.js:18 bestiary.monstercraftcost
// 260bestiaryImporter.js:18 bestiary.homunculusskillcraftcost
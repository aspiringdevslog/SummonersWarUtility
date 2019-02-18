window.onload = loadBestiaryJSON();


window.onload = getLocalStorageDataToHTML("RUNES", "runes");
window.onload = getLocalStorageDataToHTML("MONS", "monsters");

// if(localStorage.getItem('RUNES')!=null){
// 	window.onload = populateRunes();
// }

// if(localStorage.getItem('MONS')!=null){
// 	window.onload = populateMonsters();
// }


if(localStorage.getItem('IMPORTCHECK')==null){
	localStorage.setItem('IMPORTCHECK', 0);
}



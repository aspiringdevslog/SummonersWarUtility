window.onload = loadBestiaryJSON();

if(localStorage.getItem('RUNES')!=null){
	window.onload = populateHTML("RUNES", "runes");
}

if(localStorage.getItem('MONS')!=null){
	window.onload = populateHTML("MONS", "monsters");
}

if(localStorage.getItem('IMPORTCHECK')==null){
	localStorage.setItem('IMPORTCHECK', 0);
}



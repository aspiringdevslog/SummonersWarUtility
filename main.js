window.onload = loadBestiaryJSON();

if(localStorage.getItem('RUNES')!=null){
	window.onload = getLocalStorageDataToHTML("RUNES", "runes");
}

if(localStorage.getItem('MONS')!=null){
	window.onload = getLocalStorageDataToHTML("MONS", "monsters");
}

if(localStorage.getItem('IMPORTCHECK')==null){
	localStorage.setItem('IMPORTCHECK', 0);
}



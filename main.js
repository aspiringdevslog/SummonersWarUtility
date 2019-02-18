if(localStorage.getItem('RUNES')!=null){
	window.onload = populateRunes();
}

if(localStorage.getItem('IMPORTCHECK')==null){
	localStorage.setItem('IMPORTCHECK', 0);
}



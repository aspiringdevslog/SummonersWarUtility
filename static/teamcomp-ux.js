
for(var i =0; i < 10; i++){
	options.addOption("monster " + i);
}


	
 

// initialize the Selectize control
var $select = $('select').selectize(options);

// fetch the instance
var selectize = $select[0].selectize;


$('#select-monster-1').selectize({
    sortField: 'text'
});


$(function() {
	$('select').selectize(options);
});
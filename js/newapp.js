function showMessage (message) {
	// body...
	var Mess = document.getElementById(message);

    if (Mess.value == "") {
		alert("строка не заполнена");
	} else {
    	alert(Mess.value);
	}
};

function showDiv (idDiv) {

if (idDiv =="settings") {
	document.getElementById("settings").hidden = false;
	document.getElementById("execMaterialize").hidden = true;
	$('#menuSettings').addClass('active');
	$('#menuExecMaterialize').removeClass('active');


} else {
	document.getElementById("settings").hidden = true;
	document.getElementById("execMaterialize").hidden = false;
	$('#menuExecMaterialize').addClass('active');
	$('#menuSettings').removeClass('active');
	};
};



/* $('div.block').filter('#'+idDiv).show(); 
$('div.block').not('#'+idDiv).hide(); */

function createDB(){
	db = openDatabase("ToDo", "0.1", "A list of to do items.", 200000);
	if(!db){alert("Failed to connect to database.");}
};

function showPanelC() {
	var resultOnPress = document.getElementById("checkboxDiffBranches").checked;
	if (resultOnPress== true){
		document.getElementById("panelDiffBranches").hidden = false;
	} else {
		document.getElementById("panelDiffBranches").hidden = true;
	};	
	
};
// JavaScript Document
function jump(){
	var select = document.getElementById("list");
	var num = select.selectedIndex;
	var text = document.getElementById("site");
	text.value = select[num].value;
}



function jump1() {
	var site = document.getElementById("site");
	window.open(site.value, "_self");
}
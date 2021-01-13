// JavaScript Document
var time0 = 0;
var timecount;

var a;

var flag = 0;

function start1(){
	a = document.getElementById("count");
	if(flag == 0){
		start2(1);
		flag = 1;
	}
}

function start2(x){
	if(x == 1){
		setTimeout("function(){time0 += 1;}", 1000);
	}
	else{
		time0 += 1;
	}
	a.value = time0;
	timecount = setTimeout("start2(0)", 1000);
}

function stop1(){
	flag = 0;
	clearTimeout(timecount);
}
	
function clear1(){
	stop1();
	time0 = 0;
	a.value = time0;
}
	

var timer = 60;
var hitrandom;
var score = 0;

function makeBubble(){
	var clutter="";
	for(var i=1;i<113;i++){
		var random=Math.floor(Math.random()*10);
		clutter += `<div class="bubble">${random}</div>`;
	}
	document.querySelector(".dwncan").innerHTML=clutter;}

function Timer(){
	
	var time = setInterval(	function(){
		if(timer>0){
		timer--;
		document.querySelector("#timervalue").innerText=timer;
		}
		else{
			clearInterval(time)
			document.querySelector(".dwncan").innerHTML = `<h1>GAME OVER</h1>`;
			}
	},1000)
}

function NewHit(){
	hitrandom = Math.floor(Math.random()*10);
	document.querySelector("#hit").innerText=hitrandom;
}

function increaseScore(){
	score += 10;
	document.querySelector("#scorevalue").innerText=score;
}

document.querySelector(".dwncan").addEventListener("click",function(details){
	clicked=Number(details.target.innerText);
	if(clicked === hitrandom){
		increaseScore();
		makeBubble();
		NewHit();
	}
});

makeBubble();
Timer();
NewHit();


'use strict'

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent='correct number!';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let secretnumber = Math.trunc(Math.random()*20)+1;
let score=20;
let maxscore=0;

document.querySelector('.again').addEventListener('click',function(){
	// window.location.reload(); use but highscore functionality is not working
	secretnumber = Math.trunc(Math.random()*20)+1;
	score=20;
	document.querySelector('.message').textContent='😉Start guessing...';
	document.querySelector('.score').textContent=20;
	document.querySelector('.number').textContent='?';
	document.querySelector('body').style.backgroundColor='#222';
	document.querySelector('.number').style.width='15rem';
	document.querySelector('.guess').value='';
})

document.querySelector('.check').addEventListener('click',function() {
	const guess=Number(document.querySelector('.guess').value);
	if(!guess){
		document.querySelector('.message').textContent='🔴No number!';
	}
	else if(guess===secretnumber){
		if(score>maxscore){
			maxscore=score;
		}
		document.querySelector('.message').textContent='🎉correct number!';
		document.querySelector('.number').textContent=secretnumber;
		document.querySelector('.highscore').textContent=maxscore;
		document.querySelector('body').style.backgroundColor='#60b347';
		document.querySelector('.number').style.width='30rem';
		
	}
	else if(guess>secretnumber){
		if(score>1){
		document.querySelector('.message').textContent='☹Too high';
		score--;
		document.querySelector('.score').textContent=score;
		}
		else{
			document.querySelector('.message').textContent='❌you lost the game';
			document.querySelector('.score').textContent=0;
		}
	}
	else if(guess<secretnumber){

		if(score>1){
		document.querySelector('.message').textContent='☹Too low';
		score--;
		document.querySelector('.score').textContent=score;
		}
		else{
			document.querySelector('.message').textContent='❌you lost the game';
			document.querySelector('.score').textContent=0;
		}
	}

});
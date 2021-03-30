
var gameState;
var contestantCount;
var database;
var quiz;
var questions;
var contestant;

function setup(){
	canvas = createCanvas(400,400);
	database = firebase.database();
	questions = new Game();
	questions.getState();
	questions.start();
  }
  
  
  function draw(){
	if(playerCount === 4){
	 game.update(1);
  
	}
	if(gameState === 1){
	  clear();
	  game.play();
	}
  }
  
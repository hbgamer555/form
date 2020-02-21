var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getstate();
  game.start();
}


function draw(){
  if(gameState==1){
    clear();
    game.play();

  }
  if(playerCount==4){
    game.update(1);
  }
}
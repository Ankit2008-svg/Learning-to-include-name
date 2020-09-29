var GameState=0;
var PlayerCount;
var canvas;
var database;
var form, game, player;

function setup(){
    canvas=createCanvas(400,400);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    
    
}

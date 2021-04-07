var canvas;
var gamestate = 0;
var playercount;
var database;
var player,form;
var game;

function setup(){
 canvas = createCanvas (400,400);
 database = firebase.database();
game = new Game();
game.getState();
game.start();

}

function draw(){
  background("white")



}
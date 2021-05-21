
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var hammer1;
var plane;
var sand1;
var sand2;
var sand3;
var sand4;
var stone;
var rubber;
var engine;
var world;

function setup() {
	var canvas = createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(600,height,1200,20);
	hammer1 = new Hammer(20,80);
	sand1 = new Sand(505,450,10);
	sand2 = new Sand(510,450,10);
	sand3 = new Sand(490,450,10);
	sand4 = new Sand(465,450,10);
	stone = new Stone(500,450,20,20,10);
	rubber = new Rubber(500,480,30);

//	Engine.run(engine);
  
}


function draw() {
  background('lightblue');
  Engine.update(engine);

  plane.display();
  hammer1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  stone.display();
  rubber.display();
}




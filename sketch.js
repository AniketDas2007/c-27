const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg, platform;

var chain;

function preload() {}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

  // bob objects
  bobObject1 = new Bob(100);
  bobObject2 = new Bob(180);
  bobObject3 = new Bob(260);
  bobObject4 = new Bob(340);
  bobObject5 = new Bob(420);

  // roof
  roof = new Roof(260, 100, 420, 20);

  // rope
  chain1 = new Chain(bobObject1.body, { x: 100, y: 100 });
  chain2 = new Chain(bobObject2.body, { x: 180, y: 100 });
  chain3 = new Chain(bobObject3.body, { x: 260, y: 100 });
  chain4 = new Chain(bobObject4.body, { x: 340, y: 100 });
  chain5 = new Chain(bobObject5.body, { x: 420, y: 100 });

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("orange");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {
      x: -200,
      y: 0,
    });
  }
  if (keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {
      x: 200,
      y: 0,
    });
  }
}

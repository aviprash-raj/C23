const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var myEngine, myWorld, ground,box1,box2;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;
  
 
box1 = new Box(200,300,50,50);
box2 = new Box(240,100,50,100);

ground = new Ground(200,390,400,20)

}

function draw() {
  background(255,255,255);
  
  Engine.update(myEngine);
 
  box1.display();
  box2.display();
  ground.display();
}
const Bodies = Matter.Bodies;//namespace is a method to give short name or nickname
const Engine =Matter.Engine;
const World = Matter.World;

var myengine,myworld,ball,ground;

function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;

  var options = {
    isStatic : true
  }
  

 /* ground = Bodies.rectangle(200,390,400,20,options);
  World.add(myworld,ground);
  console.log(ground)*/



  //var ballOptions ={
   // restitution:1
 // }
 // ball = Bodies.circle(150,50,10,ballOptions);
  //World.add(myworld,ball);

box1 = new Box(100,150,30,30);
box2 = new Box(110,100,30,100);

ground=new Ground(200,390,400,20);
}

function draw() {
  background("pink"); 

  Engine.update(myengine); 
 // fill("brown")
 // rectMode(CENTER)
 // rect(ground.position.x,ground.position.y,400,20)
  
  //ellipseMode(RADIUS)
  //ellipse(ball.position.x,ball.position.y,10,10)
  box1.display();
  box2.display();
  ground.display();
}
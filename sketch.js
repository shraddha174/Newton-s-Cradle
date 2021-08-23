const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, rope1, rope2, rope3, rope4, roof;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	

	bob1 = new Bob(350,400,50);
	bob2 = new Bob(400,400,50);
	bob3 = new Bob(450,400,50);
	bob4 = new Bob(500,400,50);
	rope1 = new Rope(bob1.body,{x:350,y:100})
	rope2 = new Rope(bob2.body,{x:400,y:100})
	rope3 = new Rope(bob3.body,{x:450,y:100})
	rope4 = new Rope (bob4.body,{x:500,y:100})
 
	roof = new Roof (450,100,300,20,roof_options)


	



	
  
}

function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.run(engine);
  
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()

  
  
  
  


  
  //create ellipse shape for multiple bobs here

 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:155});
}
}

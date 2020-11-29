const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var packageS;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine=Engine.create();
	world=engine.world;
	

	packageS=createSprite(400,70,10,10);
	packageS.addImage(packageIMG);
	packageS.scale=0.2;

	var helicopter=createSprite(400,70,10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale=0.5;

	groundSprite=createSprite(400, 680, 800,30);
	groundSprite.shapeColor=color(150);

	var package_option={
		restitution:1,
		isStatic:true	
	}

	packageBody = Bodies.circle(400 , 70 , 5 ,package_option);
	World.add(world, packageBody);

	var ground_options={
		isStatic:true
	  }

	  ground = Bodies.rectangle(400, 680, 800, 30 , ground_options);
	  World.add(world, ground);

	
	Engine.run(engine);
}


function draw() {
  
  background(0);
 Engine.update(engine);
  rectMode(CENTER);
//   rect(ground.position.x, ground.position.y, 750, 20);

  packageS.x=packageBody.position.x;
  packageS.y=packageBody.position.y;
//   ellipseMode(RADIUS);
//   ellipse(packageBody.posion.x,packageBody.posion.y,5);
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}




var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1, box2, box3, box1Body, box2Body, box3Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	box1 = createSprite(340,630,20,80)
	box1.shapeColor = "red"
	box1 = Bodies.rectangle(width/2 , 200 ,width, 5 , {restitution:0, isStatic:true});

	box2 = createSprite(400,660,100,20)
	box2.shapeColor = "red"
	box2 = Bodies.rectangle(width/2 , 200 ,width, 5 , {restitution:0, isStatic:true});

	box3 = createSprite(460,630,20,80)
	box3.shapeColor = "red"
	box3 = Bodies.rectangle(width/2 , 200 ,width, 5 , {restitution:0, isStatic:true});

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed()
  box1.depth = groundSprite.depth+1
  box2.depth = groundSprite.depth+1
  box3.depth = groundSprite.depth+1
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)

    
  }
}




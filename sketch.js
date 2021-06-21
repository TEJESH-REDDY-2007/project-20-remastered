var car, wall;

var speed, weight;

var deformtion;

var wcar, rcar, ycar, gcar;

function preload() {
wcar = loadImage ("whitecar.png")
rcar = loadImage ("redcar.png")
ycar = loadImage ("yellowcar.png")
gcar = loadImage ("greencar.png")
}

function setup() {
  createCanvas(1300,400);

  speed = random(55,90);
  weight = random(400,1500)

  car = createSprite(50, 200, 50, 50);
  car.addImage(wcar)
  car.addAnimation("moving",rcar)
  car.addAnimation("change",ycar)
  car.addAnimation("move",gcar)
  car.scale=0.5
  wall = createSprite(1150, 200, 60, height/2);
}

function draw() {
  background(0);

car.velocityX=speed

if (wall.x-car.x < (wall.width+car.width)/4) 
{
  car.velocityX=0
deformtion=0.5 * weight * speed * speed/22500;
  if(deformtion>180)
  {
   car.changeAnimation("moving",rcar)
   console.log("abow 800")
  }

  if(deformtion<180 && deformtion>100) 
  {
    car.changeAnimation("change",ycar)
    console.log("between 800 and 100")
  }

  if(deformtion<100) 
  {
    car.changeAnimation("move",gcar)
    console.log("below 100")
  }

}

  drawSprites();
}
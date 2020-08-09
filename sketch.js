var fixedRect, movingRect;
var gameObject1, gameObject2;
var speed,weight
var d;

function setup() {
  createCanvas(1200,400);
  speed  = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  fixedRect = createSprite(1000,190, thickness, 80);
  fixedRect.shapeColor = "grey";
  //fixedRect.debug = true;
  movingRect = createSprite(35, 190,35,35);
  movingRect.shapeColor = "white";
  //movingRect.debug = false;
  

  movingRect.velocityX = speed;
 // console.log(movingRect.velocityX);
 
}
function draw() {
  background("white");  

 if( movingRect.isTouching(fixedRect)){
   fixedRect.thickness = random(22,83);
   movingRect.velocityX = 0;
 } 

 d = (0.5*weight*speed*speed)/thickness*thickness*thickness

if(d <10  ){
  movingRect.shapeColor = "green";
  
}

if(d>10  ){
  movingRect.shapeColor = "red";
  
}



  drawSprites();
}



var fixedRect, movingRect,gameObj;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityX = -5;

  gameObj = createSprite(100,100,15,15);
  gameObj.shapeColor = "blue";
  gameObj.velocityX = 5;

  gameObj2 = createSprite(400,600,15,15);
  gameObj2.shapeColor = "green";


  

}

function draw() {
  background(0,0,0); 
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  bounceOff(fixedRect,gameObj);
  if(isTouching(movingRect,gameObj2)) {
    gameObj2.shapeColor = "red";
      movingRect.shapeColor = "red";
  } else {
    gameObj2.shapeColor = "green";
      movingRect.shapeColor = "green";
  }

  drawSprites();
}


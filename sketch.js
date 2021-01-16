var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(100, 200, 50, 50);
  movingRect.shapeColor = "green";
}
function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  var centreX=fixedRect.width/2+movingRect.width/2
  var centreY=fixedRect.height/2+movingRect.height/2
  if (movingRect.x-fixedRect.x<centreX &&
    fixedRect.x-movingRect.x<centreX &&
    movingRect.y-fixedRect.y<centreY&&
    fixedRect.y-movingRect.y<centreY){
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";
    } else {
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green";
    }
  drawSprites();
}
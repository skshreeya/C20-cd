var fixedRect ,movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);

  fixedRect.shapeColor ="yellow";

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
}



function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y= mouseY;
  //horizontal distance between the two rectangles.
  console.log(movingRect.y-fixedRect.y);
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2     
    &&  fixedRect.x-movingRect.x< movingRect.width/2 + fixedRect.width/2
   &&   movingRect.y - fixedRect.y< movingRect.height/2 + fixedRect.height/2
    &&  fixedRect .y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    
    
    
    
    
    ){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor="red";

  }

  else
  {

    fixedRect.shapeColor ="yellow";

    movingRect.shapeColor = "green";
  }
  drawSprites();
}
var canvas;
var x = windowWidth/4;
var y = windowHeight/4;
function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight/2);
}

function draw() {
  background(255);
  noStroke();
  
  fill(150);
  triangle(0, 0, 0, windowHeight/2, x, y);
  triangle(0, windowHeight/2, x, windowHeight/2, x, y);
  
  fill(200);
  triangle(windowWidth/2,0, windowWidth/2, windowHeight/2, x, y);
  triangle(x, windowHeight/2, windowWidth/2, windowHeight/2, x, y)
  
  fill(240);
  triangle(0,0, windowWidth/2, 0 ,x, y);
  

}

function windowResized(){
  resizeCanvas(windowWidth/2, windowHeight/2);
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}

function mouseDragged(){
  x = mouseX;
  y = mouseY;
}
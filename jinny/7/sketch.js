var canvas;
var x = windowWidth/4;
var y = windowHeight/4;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  noStroke();
  
  fill(150);
  triangle(0, 0, 0, windowHeight, x, y);
  triangle(0, windowHeight, x, windowHeight, x, y);
  
  fill(200);
  triangle(windowWidth,0, windowWidth, windowHeight, x, y);
  triangle(x, windowHeight, windowWidth, windowHeight, x, y)
  
  fill(240);
  triangle(0,0, windowWidth, 0 ,x, y);
  

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

/*function mouseClicked(){
  x = mouseX;
  y = mouseY;
}*/

function mouseMoved(){
  x = mouseX;
  y = mouseY;
    /*s = "the noguchi museum";
    fill(50);
    textSize(20);
    text(s, x, y, 70, 50);*/
}

function mouseDragged(){
  x = mouseX;
  y = mouseY;
}

function mouseClicked() {
  saveFrames("out", "png", 1, 25, function(data){
    print(data);
  });
    
}
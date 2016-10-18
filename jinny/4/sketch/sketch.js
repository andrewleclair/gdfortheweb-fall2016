var value = 0,
    r = 255,
    g = 255,
    b = 255,
    c = 255,
    m = 255,
    y = 255,
    shape = 10,
    e = 0
    f = 0;
function preload(){
    mySound = loadSound('ding.wav');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(c,m,y,30);
  fill(value,0);
  stroke(r,g,b);
  for (var i = e; i > 0; i-=10) {
      for(var j = 20; j > 0; j-=f){
        if(shape >=5){
            strokeWeight(frameCount%(j-18));
            ellipse(touchX,touchY,i);
        }else{
            rectMode(CENTER);
            strokeWeight(frameCount%(j-18));
            rect(touchX,touchY,i,i);
        } 
      } 
	}
}

	
function mousePressed(){
mySound.setVolume(0.1);
  mySound.play();
  shape = random(10);
  e = random(10,40);
  f = random(1,15);
    if(r == 255 && g ==255 && b == 255){
        c = 255;
        m = 255;
        y = 255;
        r = random(255);
        g = random(255);
        b = random(255);
    }else {
        c = random(255);
        m = random(255);
        y = random(255);
        r = 255;
        g= 255;
        b = 255;
    }
}

function deviceMoved(){
  f = random(1,5);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
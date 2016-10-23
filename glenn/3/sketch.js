function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);
//  background(255, 20);
  rectMode(CENTER);
  frameRate(5);
}

function draw() {
    background(255, 25);
    rect(random(windowWidth), random(windowHeight), random(windowWidth/2), random(windowHeight/2));
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}
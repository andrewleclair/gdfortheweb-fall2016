function setup() {
    createCanvas (windowWidth, windowHeight);
    frameRate(3);
//    noFill();
    fill(255, 30)
//    stroke(255);
    rectMode(CENTER);
//    strokeWeight(1);
//    textMode(CENTER);
    
}

function draw() {
//    textSize(random(14,100));
//    text("Hello", mouseX, mouseY);
    rect(windowWidth/2, windowHeight/2, random(50,windowWidth)-50,random(50,windowHeight)-50);
    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
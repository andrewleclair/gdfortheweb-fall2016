function setup() {
    createCanvas (windowWidth, windowHeight);
    frameRate(10);
    background(255);
//    noFill();
    
//    stroke(255);
    rectMode(CENTER);
//    strokeWeight(1);
//    textMode(CENTER);
    
}

function draw() {
//    textSize(random(14,100));
//    text("Hello", mouseX, mouseY);
    
    
    if(mouseIsPressed) {
        ellipse(windowWidth/2, windowHeight/2, random(50,windowWidth)-50,random(50,windowHeight)-50);
        fill(0,random(150,255),0,20)
        strokeWeight(0.5);
        stroke(255);
    } else {
        fill(0,0,random(155,255),20);
        strokeWeight(0.5);
        stroke(255);
        rect(windowWidth/2, windowHeight/2, random(50,windowWidth)-50,random(50,windowHeight)-50);}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
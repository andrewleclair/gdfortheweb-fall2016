function setup() {
  frameRate(60)
  createCanvas(1000,1000)
  background(255, 204, 0)
}

function draw() {
  //fill(255,50,50)
  //stroke(255,40,0)
  //ellipse(touchX,touchY,40,40)
  
  // textSize(32);
  // fill(51, 255, 215);
  // stroke(51, 255, 215 ,50)
  // text("identity",touchX,touchY);
  
  // textSize(50)
  // fill(255,255,0)
  // stroke(255,102,153)
  // strokeWeight(2)
  // text("identity",touchX,touchY)

  var img;
      function preload() {
      img = loadImage("identity_logo.gif");
      }
      function setup() {
      image(img, 0, 0);
      }
  
}
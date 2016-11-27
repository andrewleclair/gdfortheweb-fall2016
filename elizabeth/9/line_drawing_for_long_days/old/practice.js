

// for red, green, and blue color values
var r, g, b;

setup(1280, 800)
draw()

function setup(x,y) {
  createCanvas(x, y);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(255);
  // Draw a circle
  strokeWeight(5);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(500, 300, 300, 300);
}

  function draw() {
  background(255);
  strokeWeight(0);
  stroke(r, g, b);
  fill(r, g, b, 127);
  arc(479, 300, 280, 260, PI, TWO_PI);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 500, 300);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
  

function setup() {
  createCanvas(1820, 800);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  line(mouseX, mouseY, 800, 800);
}
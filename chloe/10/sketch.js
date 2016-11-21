var img;  

function setup() {
  createCanvas(720, 400);
  img = loadImage("skin_1");  // Load the image
}

function draw() {
  
  image(img, 0, 0);
  
  image(img, 0, height/2, img.width/2, img.height/2);
}
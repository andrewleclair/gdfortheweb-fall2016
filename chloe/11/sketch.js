var img = skin_22;

function setup() {
  createCanvas(2304, 1728);
  img = loadImage("skin_22.jpg"); 
}

function draw() {
  
  image(img, 0, 0);
  
  image(img, 0, height/2, img.width/2, img.height/2);
}
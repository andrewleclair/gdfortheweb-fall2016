var psycho;
var house;
var backgroundImage;
function preload() {
  barn = loadImage('barn.jpg');
  house = loadImage('house.jpg');
  framerate(1);
}
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  var backgroundImage = barn;
}

function draw() {
  if(backgroundImage == barn){
    image(house,0 ,0, windowWidth, windowHeight);
  }else{
    image(barn, 0, 0, windowWidht, windowHeight);
  }
}
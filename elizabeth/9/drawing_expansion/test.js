var anchor = [0,0]

//this isn't working

// lines = (random(1,15);

// var r, g, b;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   frameRate(0);
//   r = random(255);
//   b = random(255);
//   g = random(255);

// }



// function mousePressed() {
// 		  anchor = [mouseX, mouseY]	
// 		}


// var anchor = [0,0]

//this isn't working

// lines = (random(1,15);

var r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(0);
  r = random(255);
  b = random(255);
  g = random(255);

}



function mousePressed() {
		  anchor = [mouseX, mouseY]	
		}



var blue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  blue = loadImage("blue.png");
  rectMode(CENTER);
  imageMode(CENTER);

}


function draw() {
background(240,0);

// move the origin to the pivot point
translate(blue.width/2+20, blue.width/2+20); 

// then rotate the grid around the pivot point by a
// number of degrees equal to the frame count of the sketch
rotate(radians(frameCount*6));

// and draw the square at the origin
  image(blue, mouseX, mouseY, blue.width/3, blue.height/3);
  
}


// // The Drawing Machine: Single color black and clickable 
// function draw() {
// if (mouseIsPressed){
// line(mouseX, mouseY, anchor[0], anchor[1])
// console.log(mouseIsPressed);
// //stroke(255); //controlling for color and transparency
// strokeWeight(.5);
// stroke(r, g, b, (211, 211, 211));
// //fill (random(200,255),random(200,255), random(200, 250));
// }
// }


// what i think i need to do is set up a variable with a function to return a random number
//this random number will become the new axis for the next point
// OR a variable that located mouse click location + then put that into the x, y coordinates
//var c =function getRandom() {
//	return Math.floor();
//}

var anchor = [0,0]

var size = strokeWeight(1,50);

var r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(0);
  // rSlider = createSlider(0, 255, 100);
  // rSlider.position(20, 20);
  // gSlider = createSlider(0, 255, 0);
  // gSlider.position(20, 50);
  // bSlider = createSlider(0, 255, 255);
  // bSlider.position(20, 80);
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


function mousePressed() {
		  anchor = [mouseX, mouseY]	
		}

// function draw() {
// 	if (mouseIsPressed){
// 		line(mouseX, mouseY, anchor [0], anchor[1])
// 		console.log(mouseIsPressed);
//   		stroke(random(0,500),random(0,200), random(0,255), random (0,255)); //controlling for color
//   		strokeWeight(stroke);
//   		fill (random(0,255),random(0,255), random(0, 250));
// 		}
// 	}

  
// function touchMoved() {
// 	line(touchX, touchY, ptouchX, ptouchY);
// 	return false;
// }

// need to make sliders to control color and weight and also x2, y2 variables.

// drawing machine!!! single and clickable
function draw() {
if (mouseIsPressed){
line(mouseX, mouseY, anchor[0], anchor[1])
console.log(mouseIsPressed);
//stroke(random(1,500),random(5,255), random(255), random(0,1000)); //controlling for color
strokeWeight(1);
fill (random(200,255),random(200,255), random(200, 250));
}
}


// function draw() {
// var r = rSlider.value();
// var g = gSlider.value();
// var b = bSlider.value();
// background (r, g, b);
// }
  




// drawing machine!!! single and clickable and super chunky
// function draw() {
// if (mouseIsPressed){
// line(mouseX, mouseY, anchor[0], anchor[1])
// console.log(mouseIsPressed);
// stroke(random(1,500),random(5,255), random(255), random(0,1000)); //controlling for color
// strokeWeight(50);
// fill (random(200,255),random(200,255), random(200, 250));
// }
// }

// good for making letters maybe/ vertical bars drawn across the horizontal
// function draw() {
// 	if (mouseIsPressed){
// 		line(mouseX, mouseY, mouseX, anchor[1])
// 		console.log(mouseIsPressed);
//   		stroke(random(0),random(0), random(0)); //controlling for color
//   		strokeWeight(stroke);
//   		fill (random(200,255),random(200,255), random(200, 250));
// 		}
// 	}




// twistie
// function draw() {
// 	if (mouseIsPressed){
// 	 	line(mouseX, mouseY, anchor[0], mouseX)
// 		console.log(mouseIsPressed);
//   		stroke(random(0),random(0), random(0)); //controlling for color
//   		strokeWeight(stroke);
//   		fill (random(200,255),random(200,255), random(200, 250));
// 		}
// 	}



// vertical lines of horizontal bars, clickable/placeable
// function draw() {
// 	if (mouseIsPressed){
// 		line(mouseX, mouseY, anchor[0], mouseY)
// 		console.log(mouseIsPressed);
//   		stroke(random(0),random(0), random(0)); //controlling for color
//   		strokeWeight(stroke);
//   		fill (random(200,255),random(200,255), random(200, 250));
// 		}
// 	}


// giant color lines (fun!)
// function draw() {
// if (mouseIsPressed){
// line(mouseX, mouseY, anchor[0], anchor[1])
// console.log(mouseIsPressed);
// stroke(random(1,500),random(255), random(255), random(500)); //controlling for color
// strokeWeight(50);
// fill (random(200,255),random(200,255), random(200, 250));
// }
// }

// giant rando colorful ellipse
// function draw() {
// 	if (mouseIsPressed){
// 		ellipse(mouseX, mouseY, anchor[0], anchor[1])
// 		console.log(mouseIsPressed);
//   		stroke(random(240,255),random(240,255), random(2, 250)); //controlling for color
//   		strokeWeight(stroke);
//   		fill (random(200,255),random(200,255), random(200, 250));
// 		}
// 	}

// giant rando ellipse
// 	function draw() {
// 	if (mouseIsPressed){
// 		ellipse(mouseX, mouseY, anchor[0], anchor[1])
// 		console.log(mouseIsPressed);
//   		stroke(random(100, 100), random(210, 215), random(200, 250)); //controlling for color
//   		strokeWeight(1);
// 		}
// 	}



// Initial draw function
// function draw() {
//   if (mouseIsPressed) {
//   line(mouseX, mouseY, 800, 500);
//   console.log(mouseIsPressed);
//   stroke(random(100, 100), random(210, 215), random(200, 250)); //controlling for color
//   strokeWeight(1);
// }
// }

// random spastic drawing
// 	 function draw() {
//   if (mouseIsPressed) {
//   var x = random(50, 1800);
//   var y = random(1, 800);
//   line(mouseX, mouseY, x, y);
//   console.log(mouseIsPressed);
//   stroke(random(100, 100), random(210, 215), random(200, 250)); //controlling for color
//   strokeWeight(1);
// }
// }


// var pickupSticks = function () {
//   function draw() {
//   if (mouseIsPressed) {
//   line(mouseX, mouseY, random(1,1800), random(1, 800));
//   console.log(mouseIsPressed);
//   stroke(random(255), random(255), random(255));
//   strokeWeight(1);
// }
// }
// }

// var pickupSticks = function () {
//   function draw() {
//   if (mouseIsPressed) {
//   line(mouseX, mouseY, random(1,1800), random(1, 800));
//   console.log(mouseIsPressed);
//   stroke(random(255), random(255), random(255));
//   strokeWeight(1);
// }
// }
// }



// vertical random horizontal color bars
// function draw() {
//   if (mouseIsPressed) {
//   line(mouseX, mouseY, random(1,1800), mouseY);
//   console.log(mouseIsPressed);
//   stroke(random(255), random(255), random(255));
//   strokeWeight(1);
// }
// }

// tiny colorful dots
//	function draw() {
//   if (mouseIsPressed) {   
//line(mouseX, mouseY, mouseX+random(), mouseY);
//   	//line(mouseX, mouseY, c, d);
//   	console.log(mouseIsPressed);
// 	stroke(random(255), random(255), random(255));
// }
// }


// this creates series of horizontal lines, drawn vertical, form the x midpoint
// function draw() {
//   if (mouseIsPressed) {
//   	line(mouseX, mouseY, 800, mouseY);
//   	console.log(mouseIsPressed);
// 	stroke(random(240), random(100), 100);
// 	//colorMode(HSB, 255);
// 	//c = color(r, g, b);
// 	//value = hue(c);  // Sets 'value' to "0"
// 	//stroke(value);

// }
// }

// this creates a midline and a tiltpoint

// function draw() {
//   if (mouseIsPressed) {
//   	line(mouseX, mouseY, 600, -mouseY+800);
//   	console.log(mouseIsPressed);
// 	stroke(random(240), random(100), 100);
// 	//colorMode(HSB, 255);
// 	//c = color(r, g, b);
// 	//value = hue(c);  // Sets 'value' to "0"
// 	//stroke(value);

// }
// }

// to make symmetrical drawing from a centerpoint

// function draw() {
// if (mouseIsPressed) {
// line(mouseX, mouseY, -mouseX+1000, -mouseY+800); // these values can be changed to 
// console.log(mouseIsPressed);
// stroke(random(240), random(100), 100);
// }
// }


// to make randomly generated tangle of lines

// function draw() {
// if (mouseIsPressed) {
// line(mouseX, mouseY, 80*random(), 80*random());
// console.log(mouseIsPressed)
// }
// }

// totally random 

// function draw() {
//   if (mouseIsPressed) {
//   	line(mouseX*random(), mouseY*random(), 100, 100);
//   	console.log(mouseIsPressed)
//   }
// }


//vertical lines drawing tool
// //function draw() {
//   if (mouseIsPressed) {
//   	line(mouseX, mouseY,winMouseX, 600); // alt version draws from the top: line(mouseX, mouseY,winMouseX, -45);
//   	console.log(mouseIsPressed)
//   }
// }

// }

// //function draw() {
//   if (mouseIsPressed) {
//   	line(mouseX, mouseY, 600, -100);
//   	console.log(mouseIsPressed);
// 	stroke(random(200), random(200), random(200));
// 	//colorMode(HSB, 255);
// 	//c = color(r, g, b);
// 	//value = hue(c);  // Sets 'value' to "0"
// 	//stroke(value);

// }
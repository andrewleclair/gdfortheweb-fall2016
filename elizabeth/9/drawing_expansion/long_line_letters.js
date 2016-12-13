var anchor = [0,0]

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

// The Drawing Machine: Single color black and clickable 
// function draw() {
// if (mouseIsPressed){
// line(mouseX, mouseY, anchor[0], anchor[1])
// console.log(mouseIsPressed);
// //stroke(255); //controlling for color and transparency
// strokeWeight(.75);
// //fill (random(200,255),random(200,255), random(200, 250));
// }
// }
  
// OTHER DRAWING OPTIONS

// 2. Drawing machine: single with VARIABLE STROKE WEIGHT
// function draw() {
// if (mouseIsPressed){
// line(mouseX, mouseY, anchor[0], anchor[1])
// console.log(mouseIsPressed);
// //stroke(r, g, b, random(0,0)); //controlling for color and transparency
// strokeWeight (random(.25,8));
// fill (random(200,255),random(200,255), random(200, 250));
// }
// }


// 3. Drawing machine: single with RANDOM COLOR
// function draw() {
// if (mouseIsPressed){
// line(mouseX, mouseY, anchor[0], anchor[1])
// console.log(mouseIsPressed);
// stroke(0, g, b, random (0, 1000)); //controlling for color and transparency
// strokeWeight(1);
// fill (random(200,255),random(200,255), random(200, 250));
// }
// }

// 4. Drawing machine: MULTI COLOR
// function draw() {
//  if (mouseIsPressed){
//    line(mouseX, mouseY, anchor [0], anchor[1])
//    console.log(mouseIsPressed);
//      stroke(random(0,500),random(0,200), random(0,255), random (0,255)); //controlling for color
//      strokeWeight(1);
//    //fill (random(0,255),random(0,255), random(0, 250));
//    }
//  }


// 5. Drawing machine: single CHUNKY
// function draw() {
// if (mouseIsPressed){
// line(mouseX, mouseY, anchor[0], anchor[1])
// console.log(mouseIsPressed);
// stroke(random(1,500),random(5,255), random(255), random(0,1000)); //controlling for color
// strokeWeight(50);
// fill (random(200,255),random(200,255), random(200, 250));
// }
// }

// 6. Drawing machine!!! single BLUE
// function draw() {
// if (mouseIsPressed){
// line(mouseX, mouseY, anchor[0], anchor[1])
// console.log(mouseIsPressed);
// stroke(r, g, b, random(0,1000)); //controlling for color
// strokeWeight(1);
// fill (random(200,255),random(200,255), random(200, 250));
// }
// }

// 7. Good for making letters maybe/ Vertical bars drawn across the horizontal
function draw() {
	if (mouseIsPressed){
		line(mouseX, mouseY, mouseX, anchor[1])
		console.log(mouseIsPressed);
  		stroke(random(0),random(0), random(0)); //controlling for color
  		strokeWeight(stroke);
  		fill (random(200,255),random(200,255), random(200, 250));
		}
	}




// 8. Twistie
// function draw() {
// 	if (mouseIsPressed){
// 	 	line(mouseX, mouseY, anchor[0], mouseX)
// 		console.log(mouseIsPressed);
//   		stroke(random(0),random(0), random(0)); //controlling for color
//   		strokeWeight(stroke);
//   		fill (random(200,255),random(200,255), random(200, 250));
// 		}
// 	}



// 9. vertical lines of horizontal bars, clickable/placeable
// function draw() {
// 	if (mouseIsPressed){
// 		line(mouseX, mouseY, anchor[0], mouseY)
// 		console.log(mouseIsPressed);
//   		stroke(random(0),random(0), random(0)); //controlling for color
//   		strokeWeight(stroke);
//   		fill (random(200,255),random(200,255), random(200, 250));
// 		}
// 	}


// 10. giant color lines (fun!)
// function draw() {
// if (mouseIsPressed){
// line(mouseX, mouseY, anchor[0], anchor[1])
// console.log(mouseIsPressed);
// stroke(random(1,500),random(255), random(255), random(500)); //controlling for color
// strokeWeight(50);
// fill (random(200,255),random(200,255), random(200, 250));
// }
// }

// 11. giant rando colorful ellipse
// function draw() {
// 	if (mouseIsPressed){
// 		ellipse(mouseX, mouseY, anchor[0], anchor[1])
// 		console.log(mouseIsPressed);
//   		stroke(random(240,255),random(240,255), random(2, 250)); //controlling for color
//   		strokeWeight(stroke);
//   		fill (random(200,255),random(200,255), random(200, 250));
// 	}
// 	}

// 12. giant rando ellipse blue-ish
	// function draw() {
	// if (mouseIsPressed){
	// 	ellipse(mouseX, mouseY, anchor[0], anchor[1])
	// 	console.log(mouseIsPressed);
 //  	  stroke(random(100, 100), random(210, 215), random(200, 250)); //controlling for color
 //  	  strokeWeight (random(1,18));
	// }
	// }



// 13. initial draw function blue-ish, from center point
// function draw() {
//   if (mouseIsPressed) {
//   line(mouseX, mouseY, 800, 500);
//   console.log(mouseIsPressed);
//   stroke(random(100, 100), random(210, 215), random(200, 250)); //controlling for color
//   strokeWeight(1);
// }
// }

// 14. random spastic drawing single color
// 	 function draw() {
//   if (mouseIsPressed) {
//   var x = random(50, 1800);
//   var y = random(1, 800);
//   line(mouseX, mouseY, x, y);
//   console.log(mouseIsPressed);
//   stroke(r,g,b, random(0,1000)); //controlling for color
//   strokeWeight(1);
// }
// }

//15. random spastic drawing multi color
//   function draw() {
//   if (mouseIsPressed) {
//   var x = random(50, 1800);
//   var y = random(1, 800);
//   line(mouseX, mouseY, x, y);
//   console.log(mouseIsPressed);
//   stroke(random (1,255), random (1,255), random(1,255), random(1,1000)); //controlling for color
//   strokeWeight(1);
// }
// }


// 16. var pickupSticks
//   function draw() {
//   if (mouseIsPressed) {
//   line(mouseX, mouseY, random(1,1800), random(1, 800));
//   console.log(mouseIsPressed);
//   stroke(random(255), random(255), random(255));
//   strokeWeight(1);
// }
// }


// 17.var pickupSticks chunky
//   function draw() {
//   if (mouseIsPressed) {
//   line(mouseX, mouseY, random(1,1800), random(1, 800));
//   console.log(mouseIsPressed);
//   stroke(random(255), random(255), random(255));
//   strokeWeight(60);
// }
// }



// 18vertical random horizontal color bars chunky
// function draw() {
//   if (mouseIsPressed) {
//   line(mouseX, mouseY, random(1,1800), mouseY);
//   console.log(mouseIsPressed);
//   stroke(random(255), random(255), random(255));
//   strokeWeight(30);
// }
// }

// tiny colorful dots
// 	function draw() {
//   if (mouseIsPressed) {   
//   line(mouseX, mouseY, mouseX+random(), mouseY);
//   console.log(mouseIsPressed);
// 	 stroke(r,g,b);
//   strokeWeight(2);
// }
// }

// small colorful dots with random single color and transparency 
//   function draw() {
//   if (mouseIsPressed) {   
//   line(mouseX, mouseY, mouseX+random(), mouseY);
//   console.log(mouseIsPressed);
//   stroke(r,g,b, random(1,1000));
//   strokeWeight(5);
// }
// }

// colorful dots
//   function draw() {
//   if (mouseIsPressed) {   
//   line(mouseX, mouseY, mouseX+random(), mouseY);
//   console.log(mouseIsPressed);
//   stroke(random(255), random(255), random(255));
//   strokeWeight(15);
// }
// }

// random drip dots and random single color and super transparent
//   function draw() {
//   if (mouseIsPressed) {   
// line(mouseX, mouseY, mouseX+random(), mouseY);
//     console.log(mouseIsPressed);
//   stroke(r,g,b, random(1,100));
//   strokeWeight(random(1,50));
// }
// }

// random drip dots and random single color and semi transparent
//   function draw() {
//   if (mouseIsPressed) {   
// line(mouseX, mouseY, mouseX+random(), mouseY);
//     console.log(mouseIsPressed);
//   stroke(r,g,b, random(1,400));
//   strokeWeight(random(1,80));
// }
// }

// this creates series of horizontal lines, drawn vertical, from the x midpoint
// function draw() {
//   if (mouseIsPressed) {
//     line(mouseX, mouseY, 800, mouseY);
//     console.log(mouseIsPressed);
//   //stroke(random(50,255), random(200,250), random(50,255)); // adjust for color palettes
//   strokeWeight(1);
// }
// }

// this creates series of horizontal lines, drawn vertical, from the x midpoint
// function draw() {
//   if (mouseIsPressed) {
//   	line(mouseX, mouseY, 800, mouseY);
//   	console.log(mouseIsPressed);
// 	stroke(random(50,255), random(200,250), random(50,255)); // adjust for color palettes
//   strokeWeight(random(1,10));

// }
// }

// this creates a midline and a tiltpoint with 4pt stroke

// function draw() {
//   if (mouseIsPressed) {
//   	line(mouseX, mouseY, 800, -mouseY+800);
//   	console.log(mouseIsPressed);
// 	stroke(random(240), random(100), 100);
// 	strokeWeight(4);

// }
// }

// this creates a midline and a tiltpoint and allows moment and new drawings along the x axis using anchor var

// function draw() {
//   if (mouseIsPressed) {
//     line(mouseX, mouseY, anchor [0], -mouseY+800);
//     console.log(mouseIsPressed);
//   stroke(random(240), random(100), 100);
//   strokeWeight(3);

// }
// }

// to make symmetrical drawing from a fixed centerpoint

// function draw() {
// if (mouseIsPressed) {
// line(mouseX, mouseY, -mouseX+900, -mouseY+1000); // these values can be changed to 
// console.log(mouseIsPressed);
// stroke(random(240), random(100), 100);
// }
// }

// to make symmetrical drawing from a sort of clickable centerpoint

// function draw() {
// if (mouseIsPressed) {
// line(mouseX, mouseY, -mouseX+anchor[0], -mouseY+anchor[1]); // this needs debugging but could work
// console.log(mouseIsPressed);
// stroke(random(240), random(100), 100);
// }
// }


// weird horizontal cylinder lines
// function draw() {
// if (mouseIsPressed) {
// line(mouseX, mouseY, mouseX+anchor[0], mouseY+anchor[1]); // this needs debugging but could work
// console.log(mouseIsPressed);
// stroke(random(240), random(100), 100);
// strokeWeight(3);
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

// random thicket of lines
// function draw() {
//   if (mouseIsPressed) {
//     line(mouseX*random(), mouseY*random(), anchor[0]*random(), anchor[1]*random());
//     console.log(mouseIsPressed);
//     strokeWeight(5);
    
//   }
// }

// random thicket of lines with pastel colors
// function draw() {
//   if (mouseIsPressed) {
//     line(mouseX*random(), mouseY*random(), anchor[0]*random(), anchor[1]*random());
//     console.log(mouseIsPressed);
//     strokeWeight(5);
//     stroke(r+random(0,255), g+random(0,255), b+random(0,255));
//   }
// }

// random early on
// function draw() {
//   if (mouseIsPressed) {
//   	line(mouseX*random(), mouseY*random(), 100, 100;
//   	console.log(mouseIsPressed)
//   }
// }


//vertical lines drawing tool / Skyline sketch :)
// function draw() {
//   if (mouseIsPressed) {
//   	line(mouseX, mouseY,winMouseX, 600); // alt version draws from the top: line(mouseX, mouseY,winMouseX, -45);
//   	console.log(mouseIsPressed)
//     strokeWeight(2);
//   }
// }


// top down draw tool early on
// function draw() {
//   if (mouseIsPressed) {
//   	line(mouseX, mouseY, 600, -100);
//   	console.log(mouseIsPressed);
// 	stroke(random(200), random(200), random(200));

//  }
// }
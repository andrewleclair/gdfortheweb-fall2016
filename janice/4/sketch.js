var a = 0;
var b = 100;
var c = 500;
var d = 900;

function setup() {

    var theCanvas = createCanvas(windowWidth, windowHeight);
//	frameRate(30);
	blendMode (REPLACE);
}



function draw() {
	strokeWeight (20);
	stroke (255, 183, 195);
	background (245,5);
	a = (a + 2)%width;
	line (a,0,10,height);
	
	strokeWeight (10);
	stroke (158, 255, 255);
	d = (d + 3)%width;
	line (d,5,10,height);
    
    strokeWeight (10);
	stroke (255, 234, 183);
	c = (c + 1.5);
	line (c,1,20,height);
    
    strokeWeight (10);
	stroke (243, 204, 255);
	b = (b + 4)%width;
	line (b,0,10,height);
	
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));


function inputX() {
    var output = 0;

    if (isTouch) {
        output = touchX;
    } else {
        output = mouseX;
    }

    return output;
}

function inputY() {
    var output = 0;

    if (isTouch) {
        output = touchY;
    } else {
        output = mouseY;
    }

    return output;
}


function inputPreviousX() {
    var output = 0;

    if (isTouch) {
        output = ptouchX;
    } else {
        output = pmouseX;
    }

    return output;
}


function inputPreviousY() {
    var output = 0;

    if (isTouch) {
        output = ptouchY;
    } else {
        output = pmouseY;
    }

    return output;
}


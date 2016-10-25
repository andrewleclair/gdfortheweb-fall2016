var a = 0;
var d = 100;
var song;
//
//function preload() {
//    song = loadSound (ticktock.mp3);
//}

function setup() {
    var theCanvas = createCanvas(windowWidth, windowHeight);
	blendMode (REPLACE);
//    song.play();
//    song.loop ();
}

function draw() {
	strokeWeight (20);
	stroke ((255), random (10), random (255));
	background (245,5);
	a = (a + 1)%width;
	line (a,0,10,height);
	
	strokeWeight (10);
	stroke (0);
	d = (d + 0.5)%width;
	line (d,0,10,height);
	
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


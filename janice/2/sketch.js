function setup() {
    var theCanvas = createCanvas(windowWidth, windowHeight);    
}


function draw() {
   
}

function mouseClicked (){
     lineShake (random(windowWidth), random(windowHeight));
}

function lineShake (powerX,powerY) {
    strokeWeight (4);
    stroke (255,0,0, random (255));
    line (random(0, powerX), random(0, powerY), random (powerX, windowWidth), random(powerY, windowHeight));
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


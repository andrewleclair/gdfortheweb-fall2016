function setup() {
    var theCanvas = createCanvas(windowWidth, windowHeight);
	blendMode (LIGHTEST);
    
}


function draw() {
    background (0, 200);
    ellipse (inputX(),inputY(), 25,25);
  
//    textSize(32);
//    textStyle(BOLD);
//    text("CHIHARU SHIOTA | The Locked Room Exhibition", 10, 30);
//    fill(0, 102, 153);
    
    textSize(25);
    text("Sept.14-Oct.10", 20, 20);
    fill(255, 255, 255);
    
    textSize(15);
    text("KANAGAWA ARTS THEATRE: 281 Yamashitacho Naka-ku,              Tokyo, Japan  Open 10am - 18am                                                              Adults: 900 yen  College students and >65 years old: 500 yen               Sponsorship of: The Japan Foundation, KENJI TAKI GALLERY  kaat.jp", 50, 40, 500, 900);
    

     if (mouseIsPressed || touchIsDown) {
            fill (random(235),random(235), random(250));
            textSize (10);
            text("You're here", inputX()+50, inputY())
            ellipse (inputX(),inputY(), 50,50);  
    }
        }
function mouseClicked (){
     lineShake (random(windowWidth), random(windowHeight));
}

function lineShake (powerX,powerY) {
    strokeWeight (3);
    stroke (random(255),0,0, random (255));
    line (random(0, powerX), random(0, powerY), random (powerX, windowWidth), random(powerY, windowHeight));
}

function mouseMoved () {

if (mouseY > 600 || touchY > 400) {
fill (random(255),random(250), random(250));
	textSize (25);
    text ("HE's here", mouseX+50,mouseY);
}
}

//
//    fill (0,0,0);
//    rect(windowWidth/2-250, windowHeight/2-250  , 500, 500);

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


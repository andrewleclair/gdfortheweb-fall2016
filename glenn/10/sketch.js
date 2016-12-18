var textBrush = "Hello";

var textArray = ["Idiot Films", "pkitae333@naver.com", "Idiot Films", "Idiot Films","Idiot Films","Idiot Films"];


//function preload() {
//    for (var i = 0; i < emojiFileNames.length; i++){
//        var filePath = "emoji/" + emojiFileNames[i];
//        var emojiImage = loadImage(filePath);
//        imageArray.push(emojiImage);
//        }
//    }

//    var filePath = "emoji/" + random(emojiFileNames);
//    emojiImage = loadImage(filePath);



function setup() {
    var theCanvas = createCanvas(windowWidth, windowHeight);
    textSize(windowWidth / 12);
    textAlign(CENTER);
    
    fill(0,0,random(200,255));
//    stroke(random(200,255),0,0);
//    strokeWeight(3);
    
    frameRate(6);
}

function draw() {
    
    background(0,0,random(200,255),95);
        
    var randomFloat = random(textArray.length);
    var randomInt = int(randomFloat);floor
    
    textBrush = textArray[randomInt];
    text(textBrush, touchX, touchY);
    
    fill(random(200,255));
//    stroke(random(200,255),0,0);
//    strokeWeight(3);
    
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    
}
    
    
    
    
    
    

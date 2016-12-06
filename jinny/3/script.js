function calculateBackground(){
    var time = new.Date();
    var day = time.getDay();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    
    var now = h+(m/60)+(s/3600);

    var i = 0;
    
    var background = document.getElementById('background');
    
    if(day = 3 || day = 4 || day = 5){
        if(now = 10){
            background.style.height = 0 +"%";
        }else if(now>10 && now <17){           i = now/17; 
        background.style.height = i +"%";
        }else{
           background.style.height = 100 +"%"; 
        }
    }else if(day = 6 || day = 0){
        if(now = 11){
            background.style.height = 0 +"%";
        }else if(now>11 && now <18){
            i = now/18;
            background.style.height = i +"%";
        }else{
            background.style.height = 100 +"%";
        }
    }else{
        background.style.height = 100 +"%";
    }
};

 function convertCanvasToImage(canvas) {
     var canvas = document.getElementById('myCanvas');
     
	var image = new Image();
	image.src = canvas.toDataURL("image.png");
	return image;
     
};

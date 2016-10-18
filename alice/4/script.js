$(document).ready(function(){
  var i = 0;
window.onclick = function () {

    i++;

     if (i % 2 !== 0) {
 var img = document.createElement("img");
          img.src="left.png";
        img.className = 'left';

document.body.insertBefore(img, document.body.firstChild);

    } else { var img = document.createElement("img");
          img.src="right.png";

           img.className = 'right';

           document.body.insertBefore(img, document.body.firstChild);

    }
};

});

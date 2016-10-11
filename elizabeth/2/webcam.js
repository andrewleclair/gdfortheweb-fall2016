(function () {
    var video=document.getElementById('video'),
        vendorURL=window.url 

    navigator.getMedia= navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator:msGetUserMedia; ||

    navigator.getMedia({
            video:true,
            audio:false
},          function (stream) {
            video.src=vendorURL.createObjectURL(stream);
            video.play();

},          function (error) {
            // an error occured
            // error.code
});

})();

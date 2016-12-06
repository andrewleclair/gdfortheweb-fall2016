$(document).ready(function(){

    function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

$(function() {
    $(".hide, .box").each(function() {
        $(this).css("background-color", get_random_color());
    });
    
});
    
   $(".hide").on("tap",function(){
   $(this).toggleClass("show");
    });
    
    var playing = false,
        audioPlayers = $('.hide');
    $('.hide').click(function() {  
         
            $(this).find('audio').get(0).play();  
            playing = true;  
        
    });  

});

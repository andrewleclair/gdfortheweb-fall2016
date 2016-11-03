$(document).ready(function(){

    $("#position1").click(function(){
        $(this).hide();
        $("#image1").show();
        $("#map").hide();
    });
    $("#image1").click(function(){
        $(this).hide();
        $("#position1").show();
        $("#map").show();
    });





});

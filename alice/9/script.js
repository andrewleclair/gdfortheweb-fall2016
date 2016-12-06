$(document).ready(function(){
	$(".circle").mouseover(function(){
		$(this).next().show();
	});

	$(".circle").mouseout(function(){
 	  $(this).next().hide();
  });

	$("#circle05").click(function (){
	  $('html, body').animate({
			scrollTop: $("#position1").offset().top},
			1500);
	});


	$("#circle08").click(function (){
		$('html, body').animate({
			scrollTop: $("#wudi").offset().top},
			1500);
	});

	$("#circle09").click(function (){
		$('html, body').animate({
			scrollTop: $("#wudi").offset().top},
			1500);
	});

	$("#circle10").click(function (){
		$('html, body').animate({
			scrollTop: $("#wudi").offset().top},
			1500);
	});

	$("#circle12").click(function (){
		$('html, body').animate({
			scrollTop: $("#position2").offset().top},
			1500);
	});

	$("#circle14").click(function (){
		$('html, body').animate({
			scrollTop: $("#box6").offset().top},
			1500);
	});

	$("#circle15").click(function (){
		$('html, body').animate({
			scrollTop: $("#position3").offset().top},
			1500);
	});

	$("#circle16").click(function (){
		$('html, body').animate({
			scrollTop: $("#woniu").offset().top},
			1500);
	});

});

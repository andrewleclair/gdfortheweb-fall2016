$(document).ready(function(){

		$(window).scroll(function() {
				 $("#mydiv1").css({
				 "top": $(window).scrollTop()*0.5 + "px"
				 });
				 $("#mydiv2").css({
				 "top": $(window).scrollTop()*0.5 + "px"
				 });
				 $("#mydiv3").css({
				 "top": $(window).scrollTop()*1.2 + "px"
				 });
				 $("#mydiv4").css({
				 "top": $(window).scrollTop()*1.2 + "px"
				 });
				 $("#mydiv5").css({
				 "top": $(window).scrollTop()*1.1 + "px"
				 });
		});



	});

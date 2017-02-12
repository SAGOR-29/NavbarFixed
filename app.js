$(document).ready(function(){

	$('body').scrollspy({
		target: '.navbar',
		offset: 95
	});


	$(window).scroll(function(){

		var scrollPos = $(document).scrollTop();
		var aboutPos = $("#about").offset().top;

		aboutPos -= 55;

		if(scrollPos >= aboutPos){
			$(".navbar").css({
				top: "0px",
				position: "fixed",
				bottom: "auto"
			});
		}
		else{
			$(".navbar").css({
				top: "auto",
				position: "absolute",
				bottom: "0px"
			});
		}

	});



});
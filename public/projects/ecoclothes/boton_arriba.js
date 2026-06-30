$(document).ready(boton)
	
function boton(){
	
	var botonIrArriba = $('.arriba');

    botonIrArriba.hide();
	
	botonIrArriba.click(subida)
		
	function subida(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	}
 
	$(window).scroll(esconder)
	
	function esconder(){
		if($(this).scrollTop() > 0 ){
			botonIrArriba.slideDown(300);
		} else {
			botonIrArriba.slideUp(300);
		}
	};
 
};



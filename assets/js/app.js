$( document ).ready(function() {

	 //PRELOAD
	    loadImage = new Image();
	    loadImage.src = "../home/bg_siria_des.jpg";
	
	    loadImage2 = new Image();
	    loadImage2.src = "../home/bg_sudan_des.jpg";
	    
	    loadImage3 = new Image();
	    loadImage3.src = "../home/bg_mexico_des.jpg"; 

//Smartphone/tablet control
if ($('html').hasClass('desktop')) {

	//Control fullscreen
	$('#marc-web').fullContent({
	    stages: 'section',
	    mapPosition: [{v: 1, h: 1}, {v: 2, h: 1}],
	    speedTransition: 2000, 
	    stageStart: 1,
	    idComplement: '' 
	});
	
	$(function() {
	       $('.projecte').perfectScrollbar();
	   });
	   
	   
	$( "#marc-web" ).mousemove(function( event ) {  	
	
		$('.noies').css("background-position-y",(event.pageY)*0.05);
	
	});


}
	else {
	document.location = "index_i.html";
	
	}



	//icono scroll
	var i = 0;
	setInterval(function() { 
	     if(i == 3) i=0;
	     $('.ir-proyecto img').attr('src', '../assets/images/scroll/scroll' + (++i) + '.png' );
	}, 300);

	var y = 0;
	setInterval(function() { 
	     if(y == 3) y=0;
	     $('.pasa-central img').attr('src', '../assets/images/scroll/scroll' + (++y) + '.png' );
	}, 300);
	
	

	

	//Scrollto chapters
	$('.pasa-central a').click(function(){
	
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top}, 1000);
	    	return false;
	});	//tanquem funcio


	//funcio per compartir en popup
	$('.popup').click(function(event) {
			  		    var width  = 575,
			  		        height = 400,
			  		        left   = ($(window).width()  - width)  / 2,
			  		        top    = ($(window).height() - height) / 2,
			  		        url    = this.href,
			  		        opts   = 'status=1' +
			  		                 ',width='  + width  +
			  		                 ',height=' + height +
			  		                 ',top='    + top    +
			  		                 ',left='   + left;
			  		
	 window.open(url, 'twitter', opts);
	 return false;
	
	
	});//tanco funcio


   
  


});//tanco ready




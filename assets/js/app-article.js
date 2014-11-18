$( document ).ready(function() {
	mides_iframes();
	carreguem_video(); 

//	$( window ).resize(function() {
//        
//        mides_iframes();
//        carreguem_video();
//         
//    });
//    
    

    
   
   
   	$('ul.tabs li').click(function(){
   		var tab_id = $(this).attr('data-tab');
   
   		$('ul.tabs li').removeClass('current');
   		$('.tab-content').removeClass('current');
   
   		$(this).addClass('current');
   		$("#"+tab_id).addClass('current');
   	})
    
    
    
	//funcio per viatjar entre capitols
		$('#top #menu-top ul li a').click(function(){
			
			    $('html, body').animate({
			        scrollTop: $( $(this).attr('href') ).offset().top}, 1000);
			    	return false;
			});	//tanquem funcio
	
	
		$('.pasa-central a').click(function(){
			
			    $('html, body').animate({
			        scrollTop: $( $(this).attr('href') ).offset().top}, 1000);
			    	return false;
			});	//tanquem funcio

	
	  
	  
	

    //funcio control menu responsive
        $('#boto').click(function() {
            if($('#menu-top').hasClass("activat")){
               $('#menu-top').removeClass("activat");
            }
        
            else {
                 $('#menu-top').addClass("activat");
            }
        });	//tanco funcio volum
        
    


            
           
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
            
            
      
    	//Jquey per dos imatges
		 $(".imatge-partida").twentytwenty();
		  
		  
      
    
 

$('.loop-des').tubeplayer("pause");


$('.loop-des').bind('mouseenter',function(event){
	$(this).tubeplayer("play");
	$(this).tubeplayer("unmute");
                  
		$('.loop-des').bind('mouseleave',function(event){
			$(this).tubeplayer("mute");
		});
                   
 });
 
 $('.loop').bind('mouseenter',function(event){
 	$(this).tubeplayer("unmute");
                   
 		 $('.loop').bind('mouseleave',function(event){
 			$(this).tubeplayer("mute");
 		});
                    
  });
       
 
	
	  
		  
    

});//tanco ready




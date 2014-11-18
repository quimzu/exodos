function mides_iframes(){
       
     $('#container iframe').attr( "width", $(window).width()*0.8)
                            .attr( "height", $(window).width()*0.5625*0.8);  
}

function carreguem_video(){



         //Calculem mides pantalla, carreguem videos i mesurem la distancia quan comença el text
        
            var amplada = $(window).width();
            var alcada = amplada * 1080 / 1920;
            $("#apartat1.full").css("height", alcada);

            //Carreguem videos Siria
            $("#youtube-player-container").tubeplayer({
                width: +amplada, // the width of the player
                height: +alcada, // the height of the player
                initialVideo: "B_E8OCQ0SbU", // the video that is loaded into the player
                preferredQuality: "hd720",
                autoPlay: true,
                loop: 1,
                showControls: 0,

            });
            
            jQuery("#youtube-player-container2").tubeplayer({
                width: +amplada, // the width of the player
                height: +alcada, // the height of the player
                allowFullScreen: "true", // true by default, allow user to go full screen
                initialVideo: "hng1r5A9rBo", // the video that is loaded into the player
                preferredQuality: "hd720",
                autoPlay: false,
                showControls: 0,
                loop: 1,
               
                
               
              });
            
            
            //Carreguem videos Siria
            jQuery("#youtube-player-container3").tubeplayer({
                width: +amplada, // the width of the player
                height: +alcada, // the height of the player
                allowFullScreen: "true", // true by default, allow user to go full screen
                initialVideo: "F3XmVxhBB8U", // the video that is loaded into the player
                preferredQuality: "hd720",
                autoPlay: true,
                showControls: 0,
                loop: 1,
            });
            
            //Carreguem videos Mexic
            jQuery("#youtube-player-container_mexico").tubeplayer({
                width: +amplada, // the width of the player
                height: +alcada, // the height of the player
                allowFullScreen: "true", // true by default, allow user to go full screen
                initialVideo: "QmfwI1of3xc", // the video that is loaded into the player
                preferredQuality: "hd720",
                autoPlay: true,
                showControls: 0,
                loop: 1,           
            });
            
            jQuery("#youtube-player-container_mexico2").tubeplayer({
                width: +amplada, // the width of the player
                height: +alcada, // the height of the player
                allowFullScreen: "true", // true by default, allow user to go full screen
                initialVideo: "VU0wHlaHfHk", // the video that is loaded into the player
                preferredQuality: "hd720",
                autoPlay: false,
                showControls: 0,
                loop: 1,  
              });            
            
           
           
            
      }

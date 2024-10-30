$(document).ready(function(){
    $('.fa-bars').click(function(){
       $(this).toggleClass('fa-times');
       $('.navbar').toggleClass('nav-toggle');
    });

   $(window).on('scroll load', function(){
      
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
    
    if($(window).scrollTop() > 30){
        $('header').addClass('header-active');
    }else{
        $('header').removeClass('header-active');
    }

    $('section').each(function(){
        var scrollTop = $(window).scrollTop();  // The current scroll position
        var id = $(this).attr('id');            // The id of the current section
        var height = $(this).outerHeight();     // The height of the current section
        var offset = $(this).offset().top - 200; // The top offset of the section, adjusted
     
        // Check if the scroll position is within this section
        if(scrollTop >= offset && scrollTop < offset + height){
          $('.navbar ul li a').removeClass('active');
          $('.navbar').find('[href="#' + id + '"]').addClass('active');
        }
     });
    
   });
});


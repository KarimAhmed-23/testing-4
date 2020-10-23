 $(window).on("load", function(){



 $('.preloader').fadeOut(1000, function(){
     
     $(this).parent().fadeOut();
     
     
 });

    
});



$(document).ready(function () {



         
    $(".language").click(function(){
    $(".dropdown-language").slideToggle();
}) ;
   

   
  $('.blog-slider').slick({
  dots: false,
  infinite: false,
  accessibility: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  rtl:true,
  prevArrow:'<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',

  responsive: [
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
});
     
     
         $(".our-missions").matchHeight();

         $(".same-height-1").matchHeight();

         $(".feature-content").matchHeight();
     
         $(".blog-content").matchHeight();

         $(".blog-content h3").matchHeight();

         $(".blog-content p").matchHeight();
         $(".footer-menu h5").matchHeight();

         $(".footer-menu-ul").matchHeight();


    
        $('.counter').counterUp({
    delay: 30, // the delay time in ms
    time: 1000 // the speed time in ms
  });
  
    


});

  var swiper = new Swiper('.swiper-container-2', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
            rotate: 0,
            stretch: 5,
            depth: 100,
            modifier: 5,
            slideShadows : true,
            },
            pagination: {
            el: '.swiper-pagination',
            },
       
       loop:true,
       
        });

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout:6000,
        margin:0,
        responsiveClass:true,
        dots: true,
        nav: false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    });

    $(".owl-item").each(function(){        
        if ($(this).hasClass("active")) {           
            setTimeout(function(){ 
                $(".owl-item.active .slider-text").show(); 
            }, 3000);
        }
    });

    $(".left-arrow").click(function(){
        $(".owl-prev").trigger("click");
    });
    $(".right-arrow").click(function(){
        $(".owl-next").trigger("click");
    });
    
});
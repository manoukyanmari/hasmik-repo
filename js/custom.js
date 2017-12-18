/**** MObile menu ****/

function openNav() {
    document.getElementById("Sidenav").style.width = "250px";
    document.getElementById("open").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
    document.getElementById("open").style.marginLeft= "0";
}


/**** Owl Carousel ***/

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
            },
            600:{
                items:1,                
            },
            1000:{
                items:1,                               
            }
        }
    });


/*** Owl carousel arrows ***/

    $(".left-arrow").click(function(){
        $(".owl-prev").trigger("click");
    });
    $(".right-arrow").click(function(){
        $(".owl-next").trigger("click");
    });

/**** image hover effect ****/

    $(".image-block" ).each(function(){
        $(this).mouseover(function() {
            $(this).find(".layer").addClass("show");
        });
        $(this).mouseout(function() {
            $(this).find(".layer").removeClass("show");
        });
    });


/**** Scroll to top *****/   


    $(function () {
        $('.scroll-top').on('click', function(){
            $('html, body').animate({scrollTop: 1}, 800);
            return false;
        });    
    });

    
/*** Fixed navbar ***/

    $(window).scroll(function () {
        var $this = $(this),
            $head = $('header nav');
        if ($this.scrollTop() > 198) {
           $head.addClass('fixed');
        } else {
           $head.removeClass('fixed');
        }
    });
    
});
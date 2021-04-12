function scrollToInnerSection(){
    $('.down-arrow').click(function(e){
        e.preventDefault();
        var getElem = $(this).attr('href');
        var getOffset = $(getElem).offset().top;

        $('html').animate({
            scrollTop:getOffset
        },700);

    });
}
$(function(){
    // Back to top button.
    $('body').append('<a href="#home" class="top scroll"><i class="fas fa-chevron-up"></i></a>');
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.top').fadeIn('slow');
        }else{
             $('.top').fadeOut('slow');
        }
    });
    $('.top').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        },500);
        return false;
    });
    scrollToInnerSection();
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        dotsEach:true,
        lazyLoad:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $('.course').slick({
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="slide-arrow prev"><i class="fas fa-caret-square-left"></i></button>',
        nextArrow: '<button class="slide-arrow next"><i class="fas fa-caret-square-right"></i></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            }
          ]
    });
    $('.venobox').venobox({
        overlayColor: 'rgba(0, 0, 0, 0.9)',
        spinner: 'cube-grid',
        spinColor: '#0496ff',
    });
    $('.count').counterUp({
        delay: 10,
        time: 1200
    });
    $(".albery-container").albery({
        speed: 500, // default: 200
        imgWidth: 1000, // default: 600
        paginationBorder: 2,
        paginationItemWidth: 105
    });

        
});
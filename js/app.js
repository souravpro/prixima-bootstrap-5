$(document).ready(function() {
    // hero slider 
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })


    $('#project-slider').owlCarousel({
        loop: true,
        margin: 24,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        navText: ["PREV", "NEXT"],
        responsive: {
            0: {
               items: 1,
               nav: false,
               margin: 0,
            },
            768: {
               items: 2, 
            },
            1140: {
                items: 2,
                center: true,
                dots: true,
            }
        }
    })

    // Reviews 
    $('#reviews-slider').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        
    })
});
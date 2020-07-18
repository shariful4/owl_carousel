$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin: 15,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            572: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});
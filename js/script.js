// Owlcarousel
$(document).ready(function () {
    $(".owl-carousels").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: true,
        responsive: {
            0: {
                items: 1.4
            },
            300: {
                items: 1.5
            },
            375: {
                items: 1.6
            },
            600: {
                items: 1.5
            },
            700: {
                items: 3.2
            },
            1200: {
                items: 4.3
            },
            1010: {
                items: 3
            }
        }
    });

    $(".main-owl").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: true,
        responsive: {
            200: {
                items: 1
            },
            300: {
                items: 1.1
            },
            375: {
                items: 1.2
            },
            400: {
                items: 1.3
            },
            720: {
                items: 2.3
            },
            1200: {
                items: 3
            },
            1024: {
                items: 2.3
            }
        }
    });
});
$(function() {


    $('.slider__items').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        responsive: [{
                breakpoint: 601,
                settings: {
                    autoplay: false,

                }
            },

        ]

    });

    $('.feedback__items').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        responsive: [{
                breakpoint: 601,
                settings: {
                    autoplay: false,

                }
            },

        ]

    });

    $('.rateyo-stars').rateYo({
        rating: 5,
        starWidth: "13px",
        spacing: "5px",
        readOnly: true

    });

    $('.footer__arrow-up').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

    $('.header__arrow-menu').on('click', function() {
        $('.header__menu-hide').slideToggle();


    });

    document.getElementById('div').onclick = function() {
        document.getElementById('div').classList.toggle('rotated');
    }




});







// $('.header__search-search').on('click', function() {
//     $('.header__search-box').slideToggle();

// });
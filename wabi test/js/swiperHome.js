
$(document).ready(function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            380: {
                slidesPerView: 1.2,
                spaceBetween: 16,

            },
            500: {
                slidesPerView: 1.5,
                spaceBetween: 16,
            },
            540: {
                slidesPerView: 2,
                spaceBetween: 24,

            },
            680: {
                slidesPerView: 2,
                spaceBetween: 24,

            },
            750: {
                slidesPerView: 2,
                spaceBetween: 30,
            },

            980: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            995: {
                slidesPerView: 3,
                spaceBetween: 24,
            },

            1040: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1350: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            2000: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },

    });
    $(".swiper-button-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".swiper-button-next").html('<i class="fa fa-chevron-right"></i>');
    $(".swiper-button-next").addClass("nextButton")
    $(".swiper-button-prev").addClass("prevButton")

    const swiperNewsCards = new Swiper('.swiperNewsCards', {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            380: {
                slidesPerView: 1.2,
                spaceBetween: 16,

            },
            500: {
                slidesPerView: 1.2,
            },
            540: {
                slidesPerView: 1.2,
            },

            720: {
                slidesPerView: 1.5
            },
            680: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView: 2,
            },
            1250: {
                slidesPerView: 2.5,
            },
            1300: {
                slidesPerView: 3,
            },


            2000: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
        },
    });

    const swiperHowItWorks = new Swiper('.swiperHowItWorks', {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            380: {
                slidesPerView: 1.2,
                spaceBetween: 16,

            },
            500: {
                slidesPerView: 1.2,
            },
            540: {
                slidesPerView: 1.2,
            },

            720: {
                slidesPerView: 1.5
            },
            680: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView: 2,
            },
            1250: {
                slidesPerView: 2.5,
            },
            1300: {
                slidesPerView: 3,
            },


            2000: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
        },
    });

})

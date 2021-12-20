$(document).ready(function () {
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
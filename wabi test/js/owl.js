$(document).ready(function () {

    $('#countriesShouldVisit .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        autoplay: false, responsiveClass: true,
        navigation: true,
        startPosition: 1,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 1.2
            },
            400: {
                items: 1.2
            },
            500: {
                items: 1.5
            },
            600: {
                items: 2
            }
            ,
            900: {
                items: 2
            },

            1100: {
                items: 3

            },
            1200: {
                items: 4, margin: 50,

            },
            1300: {
                items: 3
            },
        }
    })

    let count = 0
    const owlStage = $('#countriesShouldVisit .owl-stage').attr('style').split('transition:')

    $('#countriesShouldVisit .owl-carousel').on("dragged.owl.carousel", function (event) {
        let current = $('.owl-stage').attr('style').split('transition:')

        if (event.relatedTarget['_drag']['direction'] == 'left') {
            count++;
            if (current[0] === owlStage[0]) {
                $(".owl-prev").addClass("d-none")
            } else {
                $(".owl-prev").removeClass("d-none")
            }

        } else {
            count--;
            if (count == 0) {
            }
            if (current[0] === owlStage[0]) {
                $(".owl-prev").addClass("d-none")
            }
        }

    });

    $(' #guides .owl-carousel').on("dragged.owl.carousel", function (event) {
        let current = $('.owl-stage').attr('style').split('transition:')

        if (event.relatedTarget['_drag']['direction'] == 'left') {
            count++;
            if (current[0] === owlStage[0]) {
                $(".owl-prev").addClass("d-none")
            } else {
                $(".owl-prev").removeClass("d-none")
            }

        } else {
            count--;
            if (count == 0) {
            }
            if (current[0] === owlStage[0]) {
                $(".owl-prev").addClass("d-none")
            }
        }

    });


    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');

    $(".owl-next").addClass("nextButton")
    $(".owl-prev").addClass("prevButton")
    $(".owl-prev").addClass("d-none")

    $(".owl-next").click(function () {
        $(".owl-prev").removeClass("d-none")
        count++;
        console.log(count)
        if (current[0] === owlStage[0]) {
            $(".owl-prev").addClass("d-none")
        }
    })
    $(".owl-prev").click(function () {
        count--;
        if (count == 0) {
            $(".owl-prev").addClass("d-none")
        }
        if (current[0] === owlStage[0]) {
            $(".owl-prev").addClass("d-none")
        }
    })

})
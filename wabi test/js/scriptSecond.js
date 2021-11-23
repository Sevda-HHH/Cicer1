
$(document).ready(function () {

    let one = $("#searchBarCards .nav").children().first()
    let last = $("#searchBarCards .nav").children().last()
    setInterval(() => {
        setTimeout(() => {
            last.removeClass("third")
            one.addClass("first")
            $("#searchBarCards  .item.first").addClass("active")
            $("#searchBarCards .item.third").removeClass("active")
            setTimeout(() => {
                one.next().addClass("second")
                one.removeClass("first")
                $("#searchBarCards .item.first").removeClass("active")
                $("#searchBarCards .item.second").addClass("active")
                setTimeout(() => {
                    one.next().removeClass("second")
                    last.addClass("third")
                    $("#searchBarCards .item.third").addClass("active")
                    $("#searchBarCards .item.second").removeClass("active")
                }, 1500);
            }, 1500);
        }, 0)
    }, 4000);

    // pagination == on clikc make a page-item active 
    $(".page-item a").click(function () {
        if ($(this).children('img').attr('src')) {
            let activeClass = $("a.page-link.active");
            activeClass.removeClass("active")
            activeClass.parent().next().children().first().addClass("active")
        } else {
            $("a.page-link").removeClass("active")
            $(this).addClass("active")
        }
    })

    let touristCards = $("#Tourist .tripCards .tripCard")
    let guideCards = $("#Guide .tripCards .tripCard")
    if (touristCards.length == 0) {
        $("#Tourist .emptyList").removeClass("d-none")
    }
    if (guideCards.length == 0) {
        $("#Guide .emptyList").removeClass("d-none")
    }

    let introSection = document.querySelector("section#intro").style.padding = "83px 0 0 0 ";
    if (introSection) {
        var star_rating_width = $(".fill-ratings span").width();
        $(".star-ratings").width(star_rating_width);
    }
});
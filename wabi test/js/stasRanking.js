$(document).ready(function () {

    $(function () {
        $("div.star-rating > s, div.star-rating-rtl > s").on("click", function (e) {
            // remove all active classes first, needed if user clicks multiple times
            $(this).closest('div').find('.active').removeClass('active');

            $(e.target).parentsUntil("div").addClass('active'); // all elements up from the clicked one excluding self
            $(e.target).addClass('active');  // the element user has clicked on 

            var numStars = $(e.target).parentsUntil("div").length + 1;
            $('.show-result').text(numStars + (numStars == 1 ? " star" : " stars!"));
        });
    });
})
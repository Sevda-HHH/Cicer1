window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var clientHeight1 = document.querySelector('section#myProfile .mainn .main').clientHeight;
    var clientHeight2 = document.querySelector(' section#myProfile section#myProfilePersonalData .main').clientHeight;
    var clientHeight3 = document.querySelector(' section#myProfile section#myProfileReviews ').clientHeight;

    if (document.body.scrollTop > clientHeight1 - 155 + clientHeight3 + clientHeight2 || document.documentElement.scrollTop > clientHeight1 - 155 + clientHeight3 + clientHeight2) {

        document.querySelector(".mainn .bb").style.position = "absolute";
        document.querySelector(".mainn .bb").style.top = clientHeight2 + clientHeight1 + clientHeight3 - 32 + "px";
        document.querySelector(".mainn .bb").style.left = null;

    } else if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {

        document.querySelector(".mainn .bb").style.position = "fixed";
        document.querySelector(".mainn .bb").style.top = "15%";
        document.querySelector(".mainn .bb").style.left = "63%";

    } else if (document.body.scrollTop < 250 || document.documentElement.scrollTop < 250) {

        document.querySelector("section#myProfile .mainn .bb").style.position = "absolute";
        document.querySelector("section#myProfile .mainn .bb").style.top = "36.3%";
        document.querySelector("section#myProfile .mainn .bb").style.left = "63%";
    }

    if (document.body.scrollTop > clientHeight1 - 155 + clientHeight3 + clientHeight2 || document.documentElement.scrollTop > clientHeight1 - 155 + clientHeight3 + clientHeight2) {

        document.querySelector("section#myProfile .mainn .bb").style.position = "absolute";
        document.querySelector("section#myProfile .mainn .bb").style.top = clientHeight2 + clientHeight1 + clientHeight3 + 34 + "px";
        document.querySelector("section#myProfile .mainn .bb").style.left = null;
    } else if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {

        document.querySelector("section#myProfile .mainn .bb").style.position = "fixed";
        document.querySelector("section#myProfile .mainn .bb").style.top = "15%";
        document.querySelector("section#myProfile .mainn .bb").style.left = "63%";

    } else if (document.body.scrollTop < 250 || document.documentElement.scrollTop < 250) {
        document.querySelector(".mainn .bb").style.position = "absolute";
        document.querySelector(".mainn .bb").style.top = "36.5%";
        document.querySelector(".mainn .bb").style.left = "63%";
    }
}
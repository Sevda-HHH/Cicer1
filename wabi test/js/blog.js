window.onscroll = function () { scrollFunction() };
function scrollFunction() {

    let windowWidth = $(window).width();
    if (windowWidth < 1015) {
        var clientHeight = document.querySelector('section#mainContent .main').clientHeight;
        if (document.body.scrollTop > clientHeight - 245 || document.documentElement.scrollTop > clientHeight - 245) {
            document.querySelector("section#mainContent .webSites").style.position = "absolute";
            document.querySelector("section#mainContent .webSites").style.bottom = "0";
            document.querySelector("section#mainContent .webSites").style.left = "2%";
        } else {
            document.querySelector("section#mainContent .webSites").style.position = "fixed";
            document.querySelector("section#mainContent .webSites").style.bottom = null;
            document.querySelector("section#mainContent .webSites").style.left = "4.2%";
        }
    }
    else if (windowWidth < 1087) {
        var clientHeight = document.querySelector('section#mainContent .main').clientHeight;
        if (document.body.scrollTop > clientHeight - 245 || document.documentElement.scrollTop > clientHeight - 245) {
            document.querySelector("section#mainContent .webSites").style.position = "absolute";
            document.querySelector("section#mainContent .webSites").style.bottom = "0";
            document.querySelector("section#mainContent .webSites").style.left = "2%";
        } else {
            document.querySelector("section#mainContent .webSites").style.position = "fixed";
            document.querySelector("section#mainContent .webSites").style.bottom = null;
            document.querySelector("section#mainContent .webSites").style.left = "7.2%";
        }
    }
    else if (windowWidth < 1160) {
        var clientHeight = document.querySelector('section#mainContent .main').clientHeight;
        if (document.body.scrollTop > clientHeight - 245 || document.documentElement.scrollTop > clientHeight - 245) {
            document.querySelector("section#mainContent .webSites").style.position = "absolute";
            document.querySelector("section#mainContent .webSites").style.bottom = "0";
            document.querySelector("section#mainContent .webSites").style.left = "1.75%";
        } else {
            document.querySelector("section#mainContent .webSites").style.position = "fixed";
            document.querySelector("section#mainContent .webSites").style.bottom = null;
            document.querySelector("section#mainContent .webSites").style.left = "6.2%";
        }
    } else if (windowWidth < 1210) {
        var clientHeight = document.querySelector('section#mainContent .main').clientHeight;
        if (document.body.scrollTop > clientHeight - 245 || document.documentElement.scrollTop > clientHeight - 245) {
            document.querySelector("section#mainContent .webSites").style.position = "absolute";
            document.querySelector("section#mainContent .webSites").style.bottom = "0";
            document.querySelector("section#mainContent .webSites").style.left = "1.75%";
        } else {
            document.querySelector("section#mainContent .webSites").style.position = "fixed";
            document.querySelector("section#mainContent .webSites").style.bottom = null;
            document.querySelector("section#mainContent .webSites").style.left = "4.2%";
        }
    } else {
        var clientHeight = document.querySelector('section#mainContent .main').clientHeight;
        if (document.body.scrollTop > clientHeight - 245 || document.documentElement.scrollTop > clientHeight - 245) {
            document.querySelector("section#mainContent .webSites").style.position = "absolute";
            document.querySelector("section#mainContent .webSites").style.bottom = "0";
            document.querySelector("section#mainContent .webSites").style.left = "3.1%";
        } else {
            document.querySelector("section#mainContent .webSites").style.position = "fixed";
            document.querySelector("section#mainContent .webSites").style.bottom = null;
            document.querySelector("section#mainContent .webSites").style.left = "9.2%";
        }
    }
}
let langs = [
    "Русский",
    "Английский",
    "Французский",
    "Немецкий",
    "Азербайджанский",
    "Бенгальский",
    "Чешский",
    "Финнский",
    "Хинди",
    "Индонезийский",
    "Испанский",
    "Китайский",
    "Норвежский",
    "Португальский",
    "Шведский",
    "Укранский",
    "Иврит",
    "Арабский",
    "Русский",
]
$("#imagesAlbomSlider .carousel-control-prev ").on("click", function () {
    let count
    let prev = $(".carousel-item.active").prev()
    let countDiv = $("#imagesAlbomSlider .count span")

    if (prev.length == 0) {
        count = 6
    } else {
        count = $(".carousel-item.active").prev().attr("data-count")
    }
    countDiv.text(count)
})
$("#imagesAlbomSlider .carousel-control-next ").on("click", function () {
    let next = $(".carousel-item.active").next()
    let count
    let countDiv = $("#imagesAlbomSlider .count span")

    if (next.length == 0) {
        count = 1
    } else {
        count = $(".carousel-item.active").next().attr("data-count")
    }
    countDiv.text(count)
})

$(".photos .image").on("click", function () {
    let count = $(this).attr('data-count')
    let slideImages = $("#imagesAlbomSlider .carousel-inner").children()
    let countDiv = $("#imagesAlbomSlider .count span")

    for (let i = 0; i < slideImages.length; i++) {
        const element = slideImages[i];
        let imgCount = element.getAttribute("data-count")
        if (count == imgCount) {
            $(".carousel-item.active").removeClass("active")
            element.classList.add("active")
            countDiv.text(count)
        }
    }
})
$(".profilePic").on("click", function () {
    let count = $(this).attr('data-count')
    let slideImages = $("#imagesAlbomSlider .carousel-inner").children()
    let countDiv = $("#imagesAlbomSlider .count span")

    for (let i = 0; i < slideImages.length; i++) {
        const element = slideImages[i];
        let imgCount = element.getAttribute("data-count")
        if (count == imgCount) {
            $(".carousel-item.active").removeClass("active")
            element.classList.add("active")
            countDiv.text(count)
        }
    }
})


function toggleOpenClose(id, scrollHeight) {
    let a = $(`form#${id}`)
    a.removeClass("d-none")
    a.prev().children().first().children().first().addClass("active")
    a.prev().children().first().children().last().attr("onclick", `toggleGuideTab(this,${id})`)
    a.next().removeClass("d-none")
    $('html, body').animate({ scrollTop: scrollHeight }, 100);
}

$(".saveBtn button").on("click", function () {
    let formId = $(this).attr("data-id")
})


function showMainContent(num, topic) {
    let contents = $("#FAQ .content .main")
    $("#FAQ .content .main").addClass("d-none")
    $(".sideNav ul li").removeClass("active")
    topic.classList.add("active")

    for (let i = 0; i < contents.length; i++) {
        const element = contents[i];
        let dataId = element.getAttribute("data-id")
        if (dataId == num) {
            element.classList.remove("d-none")
        }
    }
}

$(function () {
    $("div.star-rating > s, div.star-rating-rtl > s").on("click", function (e) {
        $(this).closest('div').find('.active').removeClass('active');
        $(e.target).parentsUntil("div").addClass('active');
        $(e.target).addClass('active');
        var numStars = $(e.target).parentsUntil("div").length + 1;
        $('.show-result').text(numStars + (numStars == 1 ? " star" : " stars!"));
    });
});
const nextImageCarousel = async () => {
    let firstImage = document.querySelector('.slideImg2')
    let secondImage = document.querySelector(".slideImg3")
    let thirdImage = document.querySelector(".slideImg4")
    let lastImage = document.querySelector(".slideImg")


    secondImage.classList.remove("ani-rev")
    thirdImage.classList.remove("ani-rev")
    firstImage.classList.remove("ani-rev")
    lastImage.classList.remove("ani-rev")

    secondImage.classList.add("ani")
    thirdImage.classList.add("ani")
    firstImage.classList.add("ani")
    lastImage.classList.add("ani")

    firstImage.classList.remove("slideImg2")
    firstImage.classList.add("slideImg")
    firstImage.children[0].children[1].classList.remove("d-flex")
    firstImage.children[0].children[1].classList.add("d-none")

    lastImage.classList.remove("slideImg")
    lastImage.classList.add("slideImg4")
    secondImage.classList.remove("slideImg3")
    secondImage.classList.add("slideImg2");

    secondImage.children[0].children[1].classList.remove("d-none")
    secondImage.children[0].children[1].classList.add("d-flex")

    thirdImage.classList.remove("slideImg4")
    thirdImage.classList.add("slideImg3")

}
function showNotification(btn) {
    btn.nextElementSibling.classList.toggle("d-none")
}
// const swiperHowItWorks = new Swiper('.swiperHowItWorks', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     breakpoints: {
//         280: {
//             slidesPerView: 1,
//             spaceBetween: 16,
//         },
//         380: {
//             slidesPerView: 1.2,
//             spaceBetween: 16,

//         },
//         500: {
//             slidesPerView: 1.2,
//         },
//         540: {
//             slidesPerView: 1.2,
//         },

//         720: {
//             slidesPerView: 1.5
//         },
//         680: {
//             slidesPerView: 1.5,
//         },
//         1200: {
//             slidesPerView: 2,
//         },
//         1250: {
//             slidesPerView: 2.5,
//         },
//         1300: {
//             slidesPerView: 3,
//         },


//         2000: {
//             slidesPerView: 3,
//             spaceBetween: 16,
//         },
//     },
// });
$(".cancel").on("click", function () {
    let formId = $(this).parent().prev().attr("id")
    switch (formId) {
        case "mainnInfo":
            let inputs = $("#mainnInfo input")
            let checkBpx = $("#mainnInfo input[type='radio']")
            let languages = $(".language.chosenn")

            for (let i = 0; i < checkBpx.length; i++) {
                const element = checkBpx[i];
                element.checked = false
            }
            for (let i = 0; i < languages.length; i++) {
                languages[i].classList.remove("chosenn")
            }
            inputs.val(null)
            break;

        case "contactInfo":
            let input = $("#contactInfo input")
            input.val(null)
            break;
        default:
            break;
    }
})
$("#Tourist .details").on("click", function () {
    $(this).next().toggleClass("d-none")
})


$(".langss").on("click", ".language", function () {
    $(this).toggleClass("chosenn")
    let chsn = $(".language.chosenn")
    let btn = $(".clearLanguages")
    checkButton(btn, chsn)
})
$(".activitiess").on("click", ".activity", function () {
    $(this).toggleClass("chosen")
    let chsn = $(".activity.chosen")
    let btn = $(".clearActivities")
    checkButton(btn, chsn)
})


function showTab(btn, id, rem) {
    $(".headTitle .active").removeClass("active")
    btn.classList.add("active")
    let content = document.querySelector(id)
    let another = document.querySelector(rem)
    content.classList.remove("d-none")
    another.classList.add("d-none")
}
function showPassword(btn) {
    let input = btn.previousElementSibling
    if (input.type == "password") {
        input.type = "text";
        let images = btn.children
        images[0].classList.add("d-none")
        images[1].classList.remove("d-none")

    } else {
        input.type = "password";
        let images = btn.children
        images[0].classList.remove("d-none")
        images[1].classList.add("d-none")
    }

}



function fromUnreadToRead(num) {
    let unreadMessages = $("section#offersMain .offers .item.unread ")
    let readMessages = $("section#offersMain .offers .item.read ")
    let offers = $("section#offersMain .offers").empty()
    let dropdownText = $(".dropdown .choosenText")
    if (num == 1) {
        offers.append(unreadMessages)
        offers.append(readMessages)
        dropdownText.text("Непрочитанные вперед")

    } else if (num == 2) {
        offers.append(readMessages)
        offers.append(unreadMessages)
        dropdownText.text("Прочитанные вперед")

    }


}

function prevImageCarousel() {

    let firstImage = document.querySelector(".slideImg2")
    let thirdImage = document.querySelector(".slideImg3")
    let secondImage = document.querySelector(".slideImg")
    let lastImage = document.querySelector(".slideImg4")

    secondImage.classList.remove("ani")
    thirdImage.classList.remove("ani")
    firstImage.classList.remove("ani")
    lastImage.classList.remove("ani")

    secondImage.classList.add("ani-rev")
    thirdImage.classList.add("ani-rev")
    firstImage.classList.add("ani-rev")
    lastImage.classList.add("ani-rev")


    secondImage.classList.remove("slideImg")
    secondImage.classList.add("slideImg2")

    lastImage.classList.remove("slideImg4")
    lastImage.classList.add("slideImg")

    firstImage.classList.remove("slideImg2")
    firstImage.classList.add("slideImg3")

    thirdImage.classList.remove("slideImg3")
    thirdImage.classList.add("slideImg4")

    firstImage.children[0].children[1].style.animation = "fadeSlide 1s linear"
    secondImage.children[0].children[1].style.animation = "fadeSlide 1s linear"

    firstImage.children[0].children[1].classList.remove("d-flex")
    secondImage.children[0].children[1].classList.remove("d-none")
    firstImage.children[0].children[1].classList.add("d-none")
    secondImage.children[0].children[1].classList.add("d-flex")

}

$("#chats .toggleDownIcon").on('click', function () {
    $(".guideInfo .details").toggleClass("d-block")
    $(".guideInfo .priceAndStars.bb-none").toggleClass("d-flex")
    $("section#chats .guideInfo .content .chooseBtn button").toggleClass("mt-3")
})

$(document).click(function () {
    $(".notificationsContent").addClass("d-none")
    $(".notificationssContent").addClass("d-none")
    $("#profileHeader .dropdownn").addClass("d-none")
    $(".dropdownMenu").addClass("d-none")
});

$(".languageDropdown a").click(function (event) {
    event.stopPropagation();
    $(this).next().toggleClass("d-none")
});
$(".notificationsContent").click(function (event) {
    event.stopPropagation();
});
$(".notificationssContent").click(function (event) {
    event.stopPropagation();
});
$(".dropdownMenu").click(function (event) {
    event.stopPropagation();
});
$(".burgerOpen").on("click", function () {
    $(this).toggleClass("d-none")
    $(this).next().toggleClass("d-none")
    $('body').addClass('overflow-hidden')
})
$(".burgerClose").on("click", function () {
    $(this).addClass("d-none")
    $(this).prev().removeClass("d-none")
    $('body').removeClass('overflow-hidden')
})
$("#profileHeader .dropdownn").click(function (event) {
    event.stopPropagation();
});

$("#notifications a").click(function (event) {
    $(this).next().toggleClass("d-none")
    event.stopPropagation();
});

$(".adaptiveIcons").on("click", "#notificationss a", function (event) {
    $(".adaptiveIcons .notificationssContent").toggleClass("d-none")
    event.stopPropagation();
});
$("#profileHeader .profile").click(function (event) {
    $(this).next().toggleClass("d-none")
    event.stopPropagation();
});
function openCity(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function bckgColor() {
    let btn = document.querySelector('.chooseBtn button')
    btn.style.background = "#123b56 ";
    btn.style.border = " 1px solid #123b56";
    btn.style.color = "#ffffff";
}

// send message -- Chat 
function sendMessage(event) {
    event.preventDefault()
    let message = document.querySelector(".textBox textarea").value
    if (message) {
        let date = new Date()
        let chatFrame = document.querySelector('.chatFrame')
        let userMessage = ` <div class="row justify-content-end">
            <div class="user d-flex justify-content-end">
                <div>
                    <div class="nameAndTime justify-content-end d-flex">
                        <div class="name">
                            Jane
                        </div>
                        <div class="time">
                        ${date.getHours() + ":" + date.getMinutes()
            }
                        </div>
                    </div>
                    <div class="message row justify-content-end">
                <p>
                ${message}
                </p>
                    </div>
                </div>
                <div class="pic">
                    <img src="./assets/img/userChat.jpg" alt="Profile Pic ">
                </div>
            </div>
        </div>`

        let newMess = userMessage + chatFrame.innerHTML
        chatFrame.innerHTML = ''
        chatFrame.innerHTML = newMess
        document.querySelector(".textBox textarea").value = ''
        chatFrame.animate({ scrollTo: 1000000 }, 800);
        $(".chatFrame").animate({ scrollTo: 1000000 }, 800);
    }
}

function toggleTab(btn) {
    let form = btn.nextElementSibling
    let btns = btn.nextElementSibling.nextElementSibling
    form.classList.toggle("d-none")
    btns.classList.toggle("d-none")
}

function toggleGuideTab(btn, sectionName) {
    switch (sectionName) {

        case "mainnInfo":
            let form1 = btn.parentElement.nextElementSibling
            let btns2 = btn.parentElement.nextElementSibling.nextElementSibling
            form1.classList.toggle("d-none")
            btns2.classList.toggle("d-none")
            break;

        default:
            let form3 = btn.parentElement.parentElement.nextElementSibling
            let btns4 = btn.parentElement.parentElement.nextElementSibling.nextElementSibling
            form3.classList.toggle("d-none")
            btns4.classList.toggle("d-none")
            break;
    }

}
function chooseAGuide() {

    let chatFrame = document.querySelector('.chatFrame')
    let count = chatFrame.getAttribute("data-count");
    let newCount = Number(count) + 1;
    let btn = document.querySelector(".chooseBtn button")
    btn.classList.remove("dark")
    btn.classList.add("light")

    chatFrame.removeAttribute("data-count");
    chatFrame.setAttribute("data-count", newCount);
    btn.innerText = "Отказаться от Jane"

    if (Number(count) == 0) {
        let userMessage = ` <div class="d-flex justify-content-center ">
    <div class="greeting"> 
        Вы выбрали Jane своим местным гидом
    </div>
</div> `
        btn.setAttribute("data-bs-toggle", "modal")
        btn.setAttribute("data-bs-target", "#cancelGuide")
        let confirmMessage = userMessage + chatFrame.innerHTML
        chatFrame.innerHTML = ''
        chatFrame.innerHTML += confirmMessage
        btn.classList.remove("dark")
        btn.classList.add("light")
        $(".chatFrame").animate({ scrollTo: 1000000 }, 800);

    } else {
        btn.removeAttribute("data-bs-target")
        btn.setAttribute("data-bs-target", "#successPopup")
        btn.innerText = "Выбрать Jane"
        let userMessage = ` <div class="d-flex justify-content-center ">
        <div class="greeting"> 
            Вы отказались от Jane
        </div>
    </div> `
        let confirmMess = userMessage + chatFrame.innerHTML
        chatFrame.innerHTML = ''
        chatFrame.innerHTML += confirmMess
        chatFrame.removeAttribute("data-count");
        chatFrame.setAttribute("data-count", 0);
        btn.classList.remove("light")
        btn.classList.add("dark")
        $(".chatFrame").animate({ scrollTo: 1000000 }, 800);
    }
}
function chooseATourist() {

    let chatFrame = document.querySelector('.chatFrame')
    let count = chatFrame.getAttribute("data-count");
    let newCount = Number(count) + 1;
    let btn = document.querySelector(".chooseBtn button")
    btn.classList.remove("dark")
    btn.classList.add("light")

    chatFrame.removeAttribute("data-count");
    chatFrame.setAttribute("data-count", newCount);
    btn.innerText = "Отказаться от Абобус"

    if (Number(count) == 0) {
        let userMessage = ` <div class="d-flex justify-content-center ">
    <div class="greeting"> 
        Вы приняли предлодение от Абобус
    </div>
</div> `
        btn.setAttribute("data-bs-toggle", "modal")
        btn.setAttribute("data-bs-target", "#cancelGuide")
        let confirmMessage = userMessage + chatFrame.innerHTML
        chatFrame.innerHTML = ''
        chatFrame.innerHTML += confirmMessage
        btn.classList.remove("dark")
        btn.classList.add("light")
        $(".chatFrame").animate({ scrollTo: 1000000 }, 800);

    } else {
        btn.removeAttribute("data-bs-target")
        btn.setAttribute("data-bs-target", "#successPopup")
        btn.innerText = "Выбрать Jane"
        let userMessage = ` <div class="d-flex justify-content-center ">
        <div class="greeting"> 
            Вы отказались от Абобус
        </div>
    </div> `
        let confirmMess = userMessage + chatFrame.innerHTML
        chatFrame.innerHTML = ''
        chatFrame.innerHTML += confirmMess
        chatFrame.removeAttribute("data-count");
        chatFrame.setAttribute("data-count", 0);
        btn.classList.remove("light")
        btn.classList.add("dark")
        $(".chatFrame").animate({ scrollTo: 1000000 }, 800);
    }
}

function cancelAGuide(name) {

    let chatFrame = document.querySelector('.chatFrame')
    let count = chatFrame.getAttribute("data-count");
    let newCount = Number(count) + 1;
    let btn = document.querySelector(".chooseBtn button")
    btn.classList.remove("dark")
    btn.classList.add("light")

    chatFrame.removeAttribute("data-count");
    chatFrame.setAttribute("data-count", newCount);
    btn.innerText = `Отказаться от ${name}`

    btn.removeAttribute("data-bs-target")
    btn.setAttribute("data-bs-target", "#successPopup")
    btn.innerText = "Выбрать Jane"
    let userMessage = ` <div class="d-flex justify-content-center ">
        <div class="greeting"> 
            Вы отказались от ${name}
        </div>
    </div> `
    let confirmMess = userMessage + chatFrame.innerHTML
    chatFrame.innerHTML = ''
    chatFrame.innerHTML += confirmMess
    chatFrame.removeAttribute("data-count");
    chatFrame.setAttribute("data-count", 0);
    btn.classList.remove("light")
    btn.classList.add("dark")
    $(".chatFrame").animate({ scrollTo: 1000000 }, 800);
}


// My Profile About Me  Minimize text  -length 263
let IllPresent = $("#myProfilePersonalData .iWillPresent .txt")
if (IllPresent.text().length >= 263) {
    const string2 = IllPresent.text().substring(0, 260).concat('...');
    IllPresent.empty();
    IllPresent.append(string2);
}

// My Profile About Me  Minimize text -length 480
let text = $("#myProfilePersonalData .aboutMe .des .original").text()
if (text.length >= 479
) {
    const string2 = text.substring(0, 479
    ).concat('...');
    $("#myProfilePersonalData .aboutMe .des .original").addClass("d-none")
    $("#myProfilePersonalData .aboutMe .des .minimized").text(string2)
    $("#myProfilePersonalData .aboutMe .des .minimized").removeClass("d-none")
}

$("#myProfilePersonalData .aboutMe .showAll").click(function () {
    $("#myProfilePersonalData .aboutMe .des .original").toggleClass("d-none")
    $("#myProfilePersonalData .aboutMe .des .minimized").toggleClass("d-none")
    $("#myProfilePersonalData .showAll .down").toggleClass("d-none")
    $("#myProfilePersonalData .showAll .up").toggleClass("d-none")
})

$('.upload-input').on('click', function () {
    $('#upload-image').trigger('click');
});

$(".uploadPhoto").on("click", ".rubbish", function () {
    let target = $(this).parent().parent()
    $(".uploadOnMore").parent().remove()
    if ($(".uploadedImages").children().length - 1 < 6) {
        let newBtn = ` <div class="col-lg-6 justify-content-start row">
        <div class="uploadOnMore">
            <img src="./assets/img/camera.svg" alt="Camera Icon ">
            <div class="txt upload-multiple-input"> 
                Загрузить
            </div> 
        </div>
    </div>`
        $('.uploadedImages').append(newBtn)
    }
    target.remove()
})

$("#chooseALanguage .nav-search").keyup(function () {
    let a = $("#chooseALanguage .nav-search input ").val()
    const aa = langs.filter(el => el.toLowerCase().includes(a.toLowerCase()))
    let newSearch = aa.map(el => {
        return ` <div class="col-lg-4">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" name="gender" id="gender">
            <label class="form-check-label" for="defaultCheck1">
              ${el}
            </label>
        </div>
    </div>`
    })
    $("#chooseALanguage .langSection").empty()
    $("#chooseALanguage .langSection").append(newSearch)

})

$("#chooseALanguage .save button").click(function () {
    let a = $("#chooseALanguage .form-check input:checked")

    for (let i = 0; i < a.length; i++) {

        let el = a[i]
        let newLang = `  <div class="language chosenn">
       ${el.nextElementSibling.innerText} <img src="./assets/img/remove.svg" class=" remove p-1"
            alt="Close icon ">
    </div>`
        $(".langss").append(newLang)
        el.checked = false
    }
    let chsn = $(".language.chosenn")
    let btn = $(".clearLanguages")
    checkButton(btn, chsn)
})
$("#chooseActivity .save button").click(function () {
    let a = $("#chooseActivity .form-check input:checked")

    for (let i = 0; i < a.length; i++) {

        let el = a[i]
        let newLang = `  <div class="activity chosen">
       ${el.nextElementSibling.innerText} <img src="./assets/img/remove.svg" class=" remove p-1"
            alt="Close icon ">
    </div>`
        $(".activitiess").append(newLang)
        el.checked = false
    }
    let chsn = $(".activity.chosen")
    let btn = $(".clearActivities")
    checkButton(btn, chsn)
})

$("#chooseALanguage .clear").click(function () {
    let a = $("#chooseALanguage .form-check input:checked")

    for (let i = 0; i < a.length; i++) {
        let el = a[i]
        el.checked = false
    }
})

$("#chooseActivity .clear").click(function () {
    let a = $("#chooseActivity .form-check input:checked")

    for (let i = 0; i < a.length; i++) {
        let el = a[i]
        el.checked = false
    }
})
function checkButton(btn, chosens) {
    if (chosens.length > 0) {
        btn.removeClass("d-none")
    } else {
        btn.addClass("d-none")
    }
}
$(".clearActivities").on("click", function () {
    let chsn = $(".activity.chosen")
    let btn = $(".clearActivities")
    chsn.removeClass("chosen")
    checkButton(btn, [])
})
$(".clearLanguages").on("click", function () {
    $(".language.chosenn").removeClass("chosenn")
    $(".clearLanguages").addClass("d-none")
    checkButton(btn, [])
})
$("#filterPopUp .modal-footer .clear").on("click", function () {
    $(".aty.chosen").removeClass("chosen")
    $(".language.chosenn").removeClass("chosenn")
    let radio = $(".form-check input[type=radio]:checked")

    for (let i = 0; i < radio.length; i++) {
        const el = radio[i];
        el.checked = false
    }
})
$(function () {
    // Multiple images preview in browser
    var imagesPreview = function (input, total, placeToInsertImagePreview) {
        let button = $(".uploadOnMore").parent()
        button.remove()

        if (input.files) {
            let filesLength = input.files.length
            var filesAmount = 6 - $(".uploadedImages").children().length

            setTimeout(() => {
                if ((total + filesLength - 1) < 6 || totalLength == 0) {
                    let newBtn = ` <div class="col-lg-6 justify-content-start row">
                        <div class="uploadOnMore">
                            <input type="file" multiple id="upload-multiple-image" class="d-none "> 
                            <img src="./assets/img/camera.svg" alt="Camera Icon ">
                            <div class="txt upload-multiple-input"> 
                                Загрузить
                            </div> 
                        </div>
                    </div>`
                    placeToInsertImagePreview.append(newBtn)
                }
            }, 10);

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    let newImage = `  
                         <div class="col-lg-6  row">
                         <div class="uploadedImage d-flex justify-content-between">
                         <div class="d-flex" >
                         <div class="col-lg-2 uploadedImg">
                             <img src=${event.target.result}  alt="">
                            </div>
                              <div class="col-lg-9 imgName">
                                    mskldnlsn
                          </div>
                          </div>
                                    <div class="col-lg-1 rubbish ">
                               <img src="./assets/img/rubbish.svg"alt=" Rebbish icon Delete ">
                                </div>
                               </div>
                                     </div>`
                    placeToInsertImagePreview.append(newImage)
                }
                reader.readAsDataURL(input.files[i]);
            }
        }
    };

    $('.uploadPhoto').on('change', "#upload-multiple-image", function () {
        let totalLength = $(".uploadedImages").children().length
        imagesPreview(this, totalLength, $('.uploadedImages'));
    });
});

// show uploaded image -- Be A Local Guide 
$('input#upload-image').on('change', function (evt) {
    let file = this.files[0]
    if (file) {
        let a = $("#uploadedImageSrc")
        $("#uploadedImageSrc").removeAttr("src")
        $("#uploadedImageSrc").attr("src", URL.createObjectURL(file))

    }
})

// remove uploaded image -- Be A Local Guide 
function removeImg() {
    $(".uploadImage #uploadedImageSrc").removeAttr('src')
    $(".uploadImage #uploadedImageSrc").attr('src', "./assets/img/upload.svg")
}
$('.uploadedImages').on('click', function () {
    console.log('kmkm');
    $('#upload-multiple-image').trigger('click');
});

// My Profile About Me  Minimize text 
let activityText = $("#myProfilePersonalData .activity .txt.original")
console.log(activityText.text().length);

if (activityText.text().length >= 518
) {
    const string2 = activityText.text().substring(0, 518).concat('...');
    $("#myProfilePersonalData .activity .txt.original").addClass("d-none")
    $("#myProfilePersonalData .activity .txt.minimized").text(string2)
    $("#myProfilePersonalData .activity .txt.minimized").removeClass("d-none")
}

$("#myProfilePersonalData .activity .showAll").click(function () {
    $("#myProfilePersonalData .activity .txt.original").toggleClass("d-none")
    $("#myProfilePersonalData .activity .txt.minimized").toggleClass("d-none")
    $("#myProfilePersonalData .showAll .down").toggleClass("d-none")
    $("#myProfilePersonalData .showAll .up").toggleClass("d-none")
})

// Offers Choose All  
$(".chooseAll input ").click(function () {
    let allCheckBoxes = document.querySelectorAll("section#offersMain .offers .item input")
    if ($(this).is(":checked")) {
        allCheckBoxes.forEach(el => {
            el.checked = true
        })
        let chckCount = document.querySelector(".checkedCount")
        chckCount.innerText = allCheckBoxes.length
    } else {
        allCheckBoxes.forEach(el => {
            el.checked = false
        })
        let chckCount = document.querySelector(".checkedCount")
        chckCount.innerText = 0
    }

})

// Offers Checked count change 
$("section#offersMain .offers .item input").change(function () {
    let chckCount = document.querySelector(".checkedCount")
    let count = Number(chckCount.innerText)
    if ($(this).is(':checked')) {
        chckCount.innerText = count + 1
    } else {
        chckCount.innerText = count - 1
    }
})

$(".chatFrame").animate({ scrollTop: 1000000 }, 800);

$("input#onlyMe").click(function () {

    if ($(this).is(":checked")) {
        $("input.numOfPeople").attr('disabled', 'disabled');
    } else {
        $("  input.numOfPeople").removeAttr('disabled', false);

    }
})


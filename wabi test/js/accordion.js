const accordian = document.querySelector('.accordian');
const items = accordian.querySelectorAll('li');
const questions = accordian.querySelectorAll('.question');

function toggleaccordian() {
    const thisitem = this.parentNode;

    items.forEach(item => {
        if (thisitem == item) {
            thisitem.classList.toggle('open');
            return;
        }
    });
}


questions.forEach(question => question.addEventListener('click', toggleaccordian));

$(".accordian .question").on("click", function () {
    let hiddenIcon = $(this).find(".close img")
    hiddenIcon.toggleClass("d-none")
})
$(".accordian ul li").on("change", function () {
    let hiddenIcon = $(this).find(".close img")
    hiddenIcon.toggleClass("d-none")
})

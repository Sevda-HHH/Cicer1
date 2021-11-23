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
        item.classList.remove('open');

    });

}



questions.forEach(question => question.addEventListener('click', toggleaccordian));
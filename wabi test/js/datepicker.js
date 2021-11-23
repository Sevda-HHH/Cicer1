const elem = document.querySelector('input[name="foo"]');
const elem1 = document.querySelector('input[name="foo1"]');
const datepicker = new Datepicker(elem, {
    buttonClass: 'btn',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
    prevArrow: '<i class="fas fa-chevron-left"></i>',
});
const datepicker1 = new Datepicker(elem1, {
    buttonClass: 'btn',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
    prevArrow: '<i class="fas fa-chevron-left"></i>',
});


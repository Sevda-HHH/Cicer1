$(document).ready(function () {

    var nonLinearStepSlider = document.getElementById('slider-non-linear-step');
    noUiSlider.create(nonLinearStepSlider, {
        start: [20, 150],
        connect: true,
        keyboardMultiplier: 50,
        step: 1,
        range: {
            'min': [5],
            'max': [200]
        }
    });

    var nonLinearStepSliderValueElement = document.getElementById('slider-non-linear-step-value');
    nonLinearStepSlider.noUiSlider.on('update', function (values) {
        nonLinearStepSliderValueElement.innerHTML = `<div><span>Мин.:</span> ${values[0]} $/ч</div>
          <div><span>Мax.:</span> ${values[1]} $/ч</div>`
    });
})
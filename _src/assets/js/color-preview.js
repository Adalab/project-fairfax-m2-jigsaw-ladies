'use strict';

const preview = document.querySelector('.photo__container');
const inputGreen = document.querySelector('#color1');
const inputRed = document.querySelector('#color2');
const inputBlue = document.querySelector('#color3');
let colorValue = 0;

function getPalette(object) {
if (object.palette === "2") {
    inputGreen.removeAttribute('checked');
    console.log(inputGreen);
    inputBlue.removeAttribute('checked');
    inputRed.setAttribute('checked');
} else if (object.palette === "3") {
    inputRed.removeAttribute('checked');
    inputGreen.removeAttribute('checked');
    inputBlue.setAttribute('checked');
} else {
    inputRed.removeAttribute('checked');
    inputBlue.removeAttribute('checked');
    inputGreen.setAttribute('checked');
}
};


function paletteChange(paletteSelected, event) {
    preview.classList.remove('paletteRed', 'paletteGreen', 'paletteBlue');
    preview.classList.add(paletteSelected);
    colorValue = event.currentTarget.value;
    dataInfo.palette = colorValue;
    objStorage();
}

inputRed.addEventListener('click', function() {paletteChange('paletteRed', event)});
inputGreen.addEventListener('click', function() {paletteChange('paletteGreen', event)});
inputBlue.addEventListener('click', function() {paletteChange('paletteBlue', event)});



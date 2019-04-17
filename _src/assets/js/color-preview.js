'use strict';

const preview = document.querySelector('.photo__container');
const inputGreen = document.querySelector('#color1');
const inputRed = document.querySelector('#color2');
const inputBlue = document.querySelector('#color3');
let colorValue = 0;


function paletteChange(paletteSelected, event) {
    preview.classList.remove('paletteRed', 'paletteGreen', 'paletteBlue');
    preview.classList.add(paletteSelected);
    colorValue = event.currentTarget.value;
    dataInfo.palette = colorValue;
    console.log(dataInfo);
    
}

inputRed.addEventListener('click', function() {paletteChange('paletteRed', event)});
inputGreen.addEventListener('click', function() {paletteChange('paletteGreen', event)});
inputBlue.addEventListener('click', function() {paletteChange('paletteBlue', event)});



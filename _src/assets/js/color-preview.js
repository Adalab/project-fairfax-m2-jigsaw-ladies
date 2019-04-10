'use strict';

const preview = document.querySelector('.photo__container');
const inputGreen = document.querySelector('#color1');
const inputRed = document.querySelector('#color2');
const inputBlue = document.querySelector('#color3');


function paletteChange(paletteSelected) {
    preview.classList.remove('paletteRed', 'paletteGreen', 'paletteBlue');
    preview.classList.add(paletteSelected);
}

inputRed.addEventListener('click', function() {paletteChange('paletteRed')});
inputGreen.addEventListener('click', function() {paletteChange('paletteGreen')});
inputBlue.addEventListener('click', function() {paletteChange('paletteBlue')});
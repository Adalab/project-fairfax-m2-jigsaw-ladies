'use strict';

const preview = document.querySelector('.photo__container');
const inputGreen = document.querySelector('#color1');
const inputRed = document.querySelector('#color2');
const inputBlue = document.querySelector('#color3');
let colorValue = 0;

function fakeColorClick(input) {
    input.click(); 
   }

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


function getPalette(object) {
    console.log(inputGreen);

    if (object.palette === '2') {
        fakeColorClick(inputRed);
    }  else if (object.palette === '3') {
        fakeColorClick(inputBlue);
    } else {
        fakeColorClick(inputGreen);
    }
     }


'use strict';

const previewBar = document.querySelector
('.green__bar');
const inputGreen = document.querySelector('#color1');
const inputRed = document.querySelector('#color2');
const inputBlue = document.querySelector('#color3');
const name = document.querySelector('.preview__title');
const border = document.querySelectorAll('.rs__element');
const icon = document.querySelectorAll('.icon');

function paletteChangeGreen() {  
    previewBar.classList.remove('blue__bar', 'red__bar');
    name.classList.remove('blue__dark', 'red__dark');

    for (let i=0; i < border.length; i++){
        border[i].classList.remove('blue__light', 'red__light');
    }
    for (let i=0; i < icon.length; i++) {
        icon[i].classList.remove('blue__dark', 'red__dark');
    }
}

inputGreen.addEventListener('click', paletteChangeGreen);

function paletteChangeRed() {  
    previewBar.classList.remove('blue__bar');
    previewBar.classList.add('red__bar');

    name.classList.remove('blue__dark');
    name.classList.add('red__dark');

    for (let i=0; i < border.length; i++){
        border[i].classList.remove('blue__light');
        border[i].classList.add('red__light');
    }
    for (let i=0; i < icon.length; i++) {
        icon[i].classList.remove('blue__dark');
        icon[i].classList.add('red__dark');
    }
}

inputRed.addEventListener('click', paletteChangeRed);

function paletteChangeBlue() {  
    previewBar.classList.remove('red__bar');
    previewBar.classList.add('blue__bar');

    name.classList.remove('red__dark');
    name.classList.add('blue__dark');

    for (let i=0; i < border.length; i++){
        border[i].classList.remove('red__light');
        border[i].classList.add('blue__light');
    }
    for (let i=0; i < icon.length; i++) {
        icon[i].classList.remove('red__dark');
        icon[i].classList.add('blue__dark');
    }
}

inputBlue.addEventListener('click', paletteChangeBlue);
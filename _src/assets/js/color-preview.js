'use strict';

const previewBar = document.querySelector
('.green__bar');
const inputRed = document.querySelector('#color2');

function paletteChange() {  
    previewBar.classList.add('red__bar');
}

inputRed.addEventListener('click', paletteChange);
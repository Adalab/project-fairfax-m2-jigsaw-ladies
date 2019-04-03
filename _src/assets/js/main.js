'use strict';

const valueInput = document.querySelector(".input__name");
const valueName = document.querySelector(".preview__title");

function previewCard() {
    const result = valueInput.value;

    if ( result === '') {
        valueName.innerHTML = "Nombre Apellido";
    } else {
        valueName.innerHTML = result;
    }
}

valueInput.addEventListener('keyup', previewCard);
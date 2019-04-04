'use strict';

const valueInputName = document.querySelector(".input__name");
const valueName = document.querySelector(".preview__title");

const valueInputJob = document.querySelector(".input__job");
const valueJob = document.querySelector(".preview__subtitle");

const valueInputTel = document.querySelector(".input__tel");
const valueTel = document.querySelector(".preview__tel");

function previewCardName() {
    if ( valueInputName.value === '') {
        valueName.innerHTML = "Nombre Apellido";
    } else {
        valueName.innerHTML = valueInputName.value;
    }
}

function previewCardJob() {
    if ( valueInputJob.value === '') {
        valueJob.innerHTML = "Front-end Unicorn";
    } else {
        valueJob.innerHTML = valueInputJob.value;
    }
}

function previewCardTel(event) {
    if ( valueInputTel.value === '') {
        valueJob.innerHTML = ''
    } else {
        valueJob.innerHTML = valueInputJob.value;
    }    
}

valueInputName.addEventListener('keyup', previewCardName);
valueInputJob.addEventListener('keyup', previewCardJob);
valueInputTel.addEventListener('keyup', previewCardTel);

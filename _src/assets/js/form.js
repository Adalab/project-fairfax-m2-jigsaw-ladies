'use strict';

const valueInputName = document.querySelector(".input__name");
const valueName = document.querySelector(".preview__title");

const valueInputJob = document.querySelector(".input__job");
const valueJob = document.querySelector(".preview__subtitle");


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


const valueInputTel = document.querySelector(".input__tel");
const valueTel = document.querySelector(".preview__tel");

function previewCardTel(event) {
    const trigger = event.currentTarget;
    const value = trigger.value;

    if ( value === '') {
        valueTel.innerHTML = '';
    } else {
        valueTel.innerHTML = `<a class="rs__element" href="tel:${value}"><i class="icon fas fa-mobile-alt"></i></a>`;
    }    
}

const valueInputEmail = document.querySelector(".input__email");
const valueEmail = document.querySelector(".preview__email");

function previewCardEmail(event) {
    const trigger = event.currentTarget;
    const value = trigger.value;

    if (value === '') {
        valueEmail.innerHTML = '';
    } else {
        valueEmail.innerHTML = `<a class="rs__element" href="mailto:${value}">
        <i class="icon far fa-envelope"></i></a>`;
    }
}

valueInputName.addEventListener('keyup', previewCardName);
valueInputJob.addEventListener('keyup', previewCardJob);
valueInputTel.addEventListener('keyup', previewCardTel);
valueInputEmail.addEventListener('keyup', previewCardEmail);

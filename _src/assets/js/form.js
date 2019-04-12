'use strict';

const card = {
    palette: 1,
    name: 'Nombre Apellido',
    job: 'Front-end Developer',
    phone: +34666666666,
    email: 'sally-hill@gmail.com',
    linkedin: 'sally.hill',
    github: 'sally-hill',
    /*photo*/
}

const valueInputName = document.querySelector(".input__name");
const valueName = document.querySelector(".preview__title");

const valueInputJob = document.querySelector(".input__job");
const valueJob = document.querySelector(".preview__subtitle");


function previewCardName() {
    console.log(valueInputName);
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

const valueInputLinkedin = document.querySelector(".input__linkedin")
const valueLinkedin = document.querySelector (".preview__linkedin")

function previewCardLinkedin (event) {
    const trigger = event.currentTarget;
    const value = trigger.value;

    if (value === '') {
        valueLinkedin.innerHTML = '';
    } else {
        valueLinkedin.innerHTML = `<a class="rs__element" href="${value}"><i class="icon fab fa-linkedin-in"></i></a>`;
    }
}

const valueInputGithub = document.querySelector(".input__github")
const valueGithub = document.querySelector (".preview__github")

function previewCardGithub (event) {
    const trigger = event.currentTarget;
    const value = trigger.value;

    if (value === '') {
        valueGithub.innerHTML = '';
    } else {
        valueGithub.innerHTML = `<a class="rs__element" href="${value}" target="_blank"><i class="icon fab fa-github-alt"></i></a>`;
    }
}


valueInputName.addEventListener('keyup', previewCardName);
valueInputJob.addEventListener('keyup', previewCardJob);
valueInputTel.addEventListener('keyup', previewCardTel);
valueInputEmail.addEventListener('keyup', previewCardEmail);
valueInputLinkedin.addEventListener('keyup', previewCardLinkedin);
valueInputGithub.addEventListener('keyup', previewCardGithub);
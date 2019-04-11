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
const linkTel = document.querySelector('.rs__tel');

function previewCardTel(event) {
    const trigger = event.currentTarget;
    const value = trigger.value;

    if ( value === '') {
        linkTel.href = '';
        valueTel.classList.add('hidden');

    } else {
        linkTel.href = `"tel:${value}"`;
        valueTel.classList.remove('hidden');
    }    
}

const valueInputEmail = document.querySelector(".input__email");
const valueEmail = document.querySelector(".preview__email");
const linkEmail = document.querySelector(".rs__email");

function previewCardEmail(event) {
    const trigger = event.currentTarget;
    const value = trigger.value;

    if (value === '') {
        linkEmail.href = '';
        valueEmail.classList.add('hidden');
    } else {
        linkEmail.href = `"mailto:${value}"`;
        valueEmail.classList.remove('hidden');
    }
}

const valueInputLinkedin = document.querySelector(".input__linkedin");
const valueLinkedin = document.querySelector (".preview__linkedin");
const linkLinkedin = document.querySelector(".link__linkedin");

function previewCardLinkedin (event) {
    const trigger = event.currentTarget;
    const value = trigger.value;

    if (value === '') {
        linkLinkedin.href = '';
        valueLinkedin.classList.add('hidden');
    } else {
        linkLinkedin.href = `https://www.linkedin.com/in/${value}`;
        valueLinkedin.classList.remove('hidden');
    }
}

const valueInputGithub = document.querySelector(".input__github");
const valueGithub = document.querySelector(".preview__github");
const linkGithub = document.querySelector(".link__github");

function previewCardGithub (event) {
    const trigger = event.currentTarget;
    const value = trigger.value;

    if (value === '') {
        linkGithub.href = '';
        valueGithub.classList.add('hidden');
    } else {
        linkGithub.href = `https://github.com/${value}`;
        valueGithub.classList.remove('hidden');
    }
}


valueInputName.addEventListener('keyup', previewCardName);
valueInputJob.addEventListener('keyup', previewCardJob);
valueInputTel.addEventListener('keyup', previewCardTel);
valueInputEmail.addEventListener('keyup', previewCardEmail);
valueInputLinkedin.addEventListener('keyup', previewCardLinkedin);
valueInputGithub.addEventListener('keyup', previewCardGithub);
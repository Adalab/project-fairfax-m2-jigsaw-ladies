'use strict';

const btn = document.querySelector('.btn__reset');
const defaultValues = {
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
const valueInputTel = document.querySelector(".input__tel");
const valueTel = document.querySelector(".preview__tel");
const linkTel = document.querySelector('.rs__tel');
const valueInputEmail = document.querySelector(".input__email");
const valueEmail = document.querySelector(".preview__email");
const linkEmail = document.querySelector(".rs__email");
const valueInputLinkedin = document.querySelector(".input__linkedin");
const valueLinkedin = document.querySelector (".preview__linkedin");
const linkLinkedin = document.querySelector(".link__linkedin");
const valueInputGithub = document.querySelector(".input__github");
const valueGithub = document.querySelector (".preview__github");
const linkGithub = document.querySelector(".link__github");         


// function resetInfo() {
//     /* Que los emptyValue se sustituyan, al pinchar el botón de reset, por los defaultValues */
//     emptyValues.value = defaultValues.value;
// }

// btn.addEventListener('click', resetInfo);


function previewCard(event, preview, text) {
    const valueInput = event.currentTarget.value;
    if (valueInput === '') {
                preview.innerHTML = text;
            } else {
                preview.innerHTML = valueInput;
            }
        }

valueInputName.addEventListener('keyup', function() {previewCard(event, valueName, 'Nombre Apellido')});
valueInputJob.addEventListener('keyup', function() {previewCard(event, valueJob, 'Front-end Developer')});
valueInputTel.addEventListener('keyup', previewCardTel);
valueInputEmail.addEventListener('keyup', previewCardEmail);
valueInputLinkedin.addEventListener('keyup', previewCardLinkedin);
valueInputGithub.addEventListener('keyup', previewCardGithub);

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
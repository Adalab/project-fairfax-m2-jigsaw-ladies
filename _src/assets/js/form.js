'use strict';

const defaultValues = {
    palette: 1,
    name: 'Nombre Apellido',
    job: 'Front-end Developer',
    phone: '',
    email: '',
    linkedin: '',
    github: ''
    /*photo*/
};
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
const btnReset = document.querySelector('.btn__reset');
const resetFields = document.querySelectorAll('.input__fill');
const resetImg = document.querySelector('.preview__photo');
const resetIcons = document.querySelectorAll('.reset__icon');       

function previewCard(event, preview, text) {
    const valueInput = event.currentTarget.value;
    if (valueInput === '') {
                preview.innerHTML = text;
            } else {
                preview.innerHTML = valueInput;
            }
        }

valueInputName.addEventListener('keyup', function(event) {previewCard(event, valueName, 'Nombre Apellido')});
valueInputJob.addEventListener('keyup', function(event) {previewCard(event, valueJob, 'Front-end Developer')});
valueInputTel.addEventListener('keyup', previewCardTel);
valueInputEmail.addEventListener('keyup', previewCardEmail);
valueInputLinkedin.addEventListener('keyup', previewCardLinkedin);
valueInputGithub.addEventListener('keyup', previewCardGithub);

function previewCardTel(event) {
    const trigger = event.currentTarget.value;
    input__tel.value = defaultValues.phone;

    if ( value === '') {
        linkTel.href = '';
        valueTel.classList.add('hidden');

    } else {
        linkTel.href = `"tel:${trigger}"`;
        valueTel.classList.remove('hidden');
    }    
}

function previewCardEmail(event) {
    const trigger = event.currentTarget.value;
    input__email.value = defaultValues.email;

    if (value === '') {
        linkEmail.href = '';
        valueEmail.classList.add('hidden');
    } else {
        linkEmail.href = `"mailto:${trigger}"`;
        valueEmail.classList.remove('hidden');
    }
}

function previewCardLinkedin (event) {
    const trigger = event.currentTarget.value;
    input__linkedin.value = defaultValues.linkedin;

    if (value === '') {
        linkLinkedin.href = '';
        valueLinkedin.classList.add('hidden');
    } else {
        linkLinkedin.href = `https://www.linkedin.com/in/${trigger}`;
        valueLinkedin.classList.remove('hidden');
    }
}

function previewCardGithub (event) {
    const trigger = event.currentTarget.value;
    valueInputGithub.value = defaultValues.github;

    if (value === '') {
        linkGithub.href = '';
        valueGithub.classList.add('hidden');
    } else {
        linkGithub.href = `https://github.com/${trigger}`;
        valueGithub.classList.remove('hidden');
    }
}

function defaultIcons() {
    for (const icon of resetIcons) {
        icon.value = "";
    }
} 

function resetInfo() {
    console.log('hgsdjhfghdfghjdfg');
    for (const item of resetFields) {
        item.value = "";
        paletteChange('paletteGreen');
        inputGreen.checked = 'checked';
        previewCard();
        defaultIcons();
    }
}

btnReset.addEventListener('click', resetInfo); 
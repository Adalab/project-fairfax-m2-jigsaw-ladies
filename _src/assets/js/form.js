'use strict';

const btn = document.querySelector('.btn__reset');
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
const valueInputTel = document.querySelector(".input__tel");
const valueTel = document.querySelector(".preview__tel");
const valueInputEmail = document.querySelector(".input__email");
const valueEmail = document.querySelector(".preview__email");
const valueInputLinkedin = document.querySelector(".input__linkedin");
const valueLinkedin = document.querySelector (".preview__linkedin");
const valueInputGithub = document.querySelector(".input__github");
const valueGithub = document.querySelector (".preview__github");


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
valueInputTel.addEventListener('keyup', function() {previewCard(event, valueTel, `<a class="rs__element" href="tel:${event.currentTarget.value}"><i class="icon fas fa-mobile-alt"></i></a>`)});
valueInputEmail.addEventListener('keyup', function() {previewCard(event, valueEmail, `<a class="rs__element" href="mailto:${value}"><i class="icon far fa-envelope"></i></a>`)});
valueInputLinkedin.addEventListener('keyup', function() {previewCard(event, valueLinkedin, `<a class="rs__element" href="${value}"><i class="icon fab fa-linkedin-in"></i></a>`)});
valueInputGithub.addEventListener('keyup', function() {previewCard(event, valueGithub, `<a class="rs__element" href="${value}" target="_blank"><i class="icon fab fa-github-alt"></i></a>`)});

// function previewCardName() {
//     if ( valueInputName.value === '') {
//         valueName.innerHTML = "Nombre Apellido";
//     } else {
//         valueName.innerHTML = valueInputName.value;
//     }
// }

// function previewCardJob() {
//     if ( valueInputJob.value === '') {
//         valueJob.innerHTML = "Front-end Unicorn";
//     } else {
//         valueJob.innerHTML = valueInputJob.value;
//     }
// }




// function previewCardTel(event) {
//     const trigger = event.currentTarget;
//     const value = trigger.value;

//     if ( value === '') {
//         valueTel.innerHTML = '';
//     } else {
//         valueTel.innerHTML = `<a class="rs__element" href="tel:${value}"><i class="icon fas fa-mobile-alt"></i></a>`;
//     }    
// }



// function previewCardEmail(event) {
//     const trigger = event.currentTarget;
//     const value = trigger.value;

//     if (value === '') {
//         valueEmail.innerHTML = '';
//     } else {
//         valueEmail.innerHTML = `<a class="rs__element" href="mailto:${value}">
//         <i class="icon far fa-envelope"></i></a>`;
//     }
// }



// function previewCardLinkedin (event) {
//     const trigger = event.currentTarget;
//     const value = trigger.value;

//     if (value === '') {
//         valueLinkedin.innerHTML = '';
//     } else {
//         valueLinkedin.innerHTML = `<a class="rs__element" href="${value}"><i class="icon fab fa-linkedin-in"></i></a>`;
//     }
// }



// function previewCardGithub (event) {
//     const trigger = event.currentTarget;
//     const value = trigger.value;

//     if (value === '') {
//         valueGithub.innerHTML = '';
//     } else {
//         valueGithub.innerHTML = `<a class="rs__element" href="${value}" target="_blank"><i class="icon fab fa-github-alt"></i></a>`;
//     }
// }
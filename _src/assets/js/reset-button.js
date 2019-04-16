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
const btnReset = document.querySelector('.btn__reset');
const resetFields = document.querySelectorAll('.input__fill');
const resetImg = document.querySelector('.preview__photo');
const resetIcons = document.querySelectorAll('.reset__icon');

function defaultIcons() {
    for (const icon of resetIcons) {
        icon = defaultValues;
        console.log(defaultIcons());
    }
}

// function resetInfo() {
//     /* Que los emptyValue se sustituyan, al pinchar el botón de reset, por los defaultValues */
//     emptyValues.value = defaultValues.value;
// }

btnReset.addEventListener('click', defaultIcons);
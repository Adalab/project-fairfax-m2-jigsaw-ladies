'use strict';

const valueInputName = document.querySelector ('.input__name');
const valueName = document.querySelector ('.preview__title');
const valueInputJob = document.querySelector ('.input__job');
const valueJob = document.querySelector ('.preview__subtitle');
const valueInputTel = document.querySelector ('.input__tel');
const valueTel = document.querySelector ('.preview__tel');
const linkTel = document.querySelector ('.rs__tel');
const valueInputEmail = document.querySelector ('.input__email');
const valueEmail = document.querySelector ('.preview__email');
const linkEmail = document.querySelector ('.rs__email');
const valueInputLinkedin = document.querySelector ('.input__linkedin');
const valueLinkedin = document.querySelector ('.preview__linkedin');
const linkLinkedin = document.querySelector ('.link__linkedin');
const valueInputGithub = document.querySelector ('.input__github');
const valueGithub = document.querySelector ('.preview__github');
const linkGithub = document.querySelector ('.link__github');
const btnReset = document.querySelector ('.btn__reset');
const resetFields = document.querySelectorAll ('.input__fill');
const resetImg = document.querySelector ('.preview__photo');
const resetIcons = document.querySelectorAll ('.reset__icon');

const dataInfo = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

const defaultValues = {
  palette: 1,
  name: 'Nombre Apellido',
  job: 'Front-end Developer',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: 'https://via.placeholder.com/200x200/cccccc/666666/?text=IMAGE',
};

function previewCard (event, preview, text) {
  const valueInput = event.currentTarget.value;
  if (valueInput === '') {
    preview.innerHTML = text;
    objStorage ();
  } else {
    preview.innerHTML = valueInput;
    objStorage ();
  }
}

valueInputName.addEventListener ('keyup', function (event) {
  previewCard (event, valueName, 'Nombre Apellido');
});
valueInputJob.addEventListener ('keyup', function (event) {
  previewCard (event, valueJob, 'Front-end Developer');
});
valueInputTel.addEventListener ('keyup', previewCardTel);
valueInputEmail.addEventListener ('keyup', previewCardEmail);
valueInputLinkedin.addEventListener ('keyup', previewCardLinkedin);
valueInputGithub.addEventListener ('keyup', previewCardGithub);

function previewCardTel (event) {
  const trigger = event.currentTarget;
  const value = trigger.value;

  if (value === '') {
    linkTel.href = '';
    valueTel.classList.add ('hidden');
    objStorage ();
  } else {
    linkTel.href = `'tel:${value}'`;
    valueTel.classList.remove ('hidden');
    objStorage ();
  }
}

function previewCardEmail (event) {
  const trigger = event.currentTarget;
  const value = trigger.value;

  if (value === '') {
    linkEmail.href = '';
    valueEmail.classList.add ('hidden');
    objStorage ();
  } else {
    linkEmail.href = `'mailto:${value}'`;
    valueEmail.classList.remove ('hidden');
    objStorage ();
  }
}

function previewCardLinkedin (event) {
  const trigger = event.currentTarget;
  const value = trigger.value;

  if (value === '') {
    linkLinkedin.href = '';
    valueLinkedin.classList.add ('hidden');
    objStorage ();
  } else {
    linkLinkedin.href = `https://www.linkedin.com/in/${value}`;
    valueLinkedin.classList.remove ('hidden');
    objStorage ();
  }
}

function previewCardGithub (event) {
  const trigger = event.currentTarget;
  const value = trigger.value;

  if (value === '') {
    linkGithub.href = '';
    valueGithub.classList.add ('hidden');
    objStorage ();
  } else {
    linkGithub.href = `https://github.com/${value}`;
    valueGithub.classList.remove ('hidden');
    objStorage ();
  }
}

function objStorage () {
  dataInfo.name = valueInputName.value;
  dataInfo.job = valueInputJob.value;
  dataInfo.phone = valueInputTel.value;
  dataInfo.email = valueInputEmail.value;
  dataInfo.linkedin = valueInputLinkedin.value;
  dataInfo.github = valueInputGithub.value;
  dataInfo.palette = colorValue;
  dataInfo.photo = photo.src;
  storage ();
}

function storage () {
  localStorage.setItem ('dataInfo', JSON.stringify (dataInfo));
}

function getStorage () {
  const savedData = JSON.parse (localStorage.getItem ('dataInfo'));
  if (savedData === null) {
    storage ();
  } else {
    if (savedData.name === '') {
      valueName.innerHTML = defaultValues.name;
      valueJob.innerHTML = defaultValues.job;
    } else {
      valueName.innerHTML = savedData.name;
      valueJob.innerHTML = savedData.job;
    }
    profileImage.style.backgroundImage = `url(${savedData.photo}`;
    profilePreview.style.backgroundImage = `url(${savedData.photo}`;
    photo.src = savedData.photo;
    dataInfo.photo = savedData.photo;
    getPalette (savedData);
    valueInputName.value = savedData.name;
    valueInputJob.value = savedData.job;
    valueInputTel.value = savedData.phone;
    linkTel.href = `tel: ${savedData.phone}`;
    valueInputEmail.value = savedData.email;
    linkEmail.href = `mailto: ${savedData.email}`;
    valueInputLinkedin.value = savedData.linkedin;
    linkLinkedin.href = `https://www.linkedin.com/in/${savedData.linkedin}`;
    valueInputGithub.value = savedData.github;
    linkGithub.href = `https://github.com/${savedData.github}`;
    printIcon (savedData, 'email', valueEmail);
    printIcon (savedData, 'phone', valueTel);
    printIcon (savedData, 'linkedin', valueLinkedin);
    printIcon (savedData, 'github', valueGithub);
    objStorage();
  }
}

function printIcon (object, objectkey, preview) {
  if (object[objectkey] !== '') {
    preview.classList.remove ('hidden');
  }
}

getStorage ();

function hiddenIcon () {
  for (const icon of resetIcons) {
    icon.classList.add ('hidden');
  }
}

function hiddenFields () {
  for (const field of resetFields) {
    field.innerHTML = '';
  }
}

function resetButton () {
  valueName.innerHTML = defaultValues.name;
  valueJob.innerHTML = defaultValues.job;
  valueTel.innerHTML = defaultValues.phone;
  valueEmail.innerHTML = defaultValues.email;
  valueGithub.innerHTML = defaultValues.github;
  valueLinkedin.innerHTML = defaultValues.linkedin;
  //photo. Error aquí tmbn
  profileImage.style.backgroundImage = `url(${defaultValues.photo})`;
  profilePreview.style.backgroundImage = `url(${defaultValues.photo})`;
  hiddenIcon ();
  hiddenFields ();
  fakeColorClick (inputGreen);
}

btnReset.addEventListener ('click', resetButton);

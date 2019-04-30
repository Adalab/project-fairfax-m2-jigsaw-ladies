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
const resetIcons = document.querySelectorAll ('.reset__list');
const twitterContainer = document.querySelector ('.twitter__container');
const shareButton = document.querySelector ('.share__button');

const dataInfo = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: 'https://via.placeholder.com/200x200/cccccc/666666/?text=IMAGE',
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

const previewCard = (event, preview, text) => {
  const valueInput = event.currentTarget.value;
  if (valueInput === '') {
    preview.innerHTML = text;
    objectStorage ();
  } else {
    preview.innerHTML = valueInput;
    objectStorage ();
  }
};


const previewCardTel = event => {
  const trigger = event.currentTarget;
  const value = trigger.value;

  if (value === '') {
    linkTel.href = '';
    valueTel.classList.add ('hidden');
    objectStorage ();
  } else {
    linkTel.href = `tel:${value}`;
    valueTel.classList.remove ('hidden');
    objectStorage ();
  }
};

const previewCardEmail = event => {
  const trigger = event.currentTarget;
  const value = trigger.value;

  if (value === '') {
    linkEmail.href = '';
    valueEmail.classList.add ('hidden');
    objectStorage ();
  } else {
    linkEmail.href = `mailto:${value}`;
    valueEmail.classList.remove ('hidden');
    objectStorage ();
  }
};

const previewCardLinkedin = event => {
  const trigger = event.currentTarget;
  const value = trigger.value;

  if (value === '') {
    linkLinkedin.href = '';
    valueLinkedin.classList.add ('hidden');
    objectStorage ();
  } else {
    linkLinkedin.href = `https://www.linkedin.com/in/${value}`;
    valueLinkedin.classList.remove ('hidden');
    objectStorage ();
  }
};

const previewCardGithub = event => {
  const trigger = event.currentTarget;
  const value = trigger.value;
  if (value === '') {
    linkGithub.href = '';
    valueGithub.classList.add ('hidden');
    objectStorage ();
  } else {
    linkGithub.href = `https://github.com/${value}`;
    valueGithub.classList.remove ('hidden');
    objectStorage ();
  }
};

const objectStorage = () => {
  dataInfo.name = valueInputName.value;
  dataInfo.job = valueInputJob.value;
  dataInfo.phone = valueInputTel.value;
  dataInfo.email = valueInputEmail.value;
  dataInfo.linkedin = valueInputLinkedin.value;
  dataInfo.github = valueInputGithub.value;
  dataInfo.palette = colorValue;
  dataInfo.photo = photo.src;
  storage (dataInfo);
};

const storage = object => {
  localStorage.setItem ('dataInfo', JSON.stringify (object));
};

const getStorage = () => {
  const savedData = JSON.parse (localStorage.getItem ('dataInfo'));
  if (savedData === null) {
    storage (dataInfo);
  } else {
    if (savedData.name === '') {
      valueName.innerHTML = defaultValues.name;
    } else {
      valueName.innerHTML = savedData.name;
    }

    if (savedData.job === '') {
      valueJob.innerHTML = defaultValues.job;
    } else {
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
    objectStorage ();
  }
};

const printIcon = (object, objectkey, preview) => {
  if (object[objectkey] !== '') {
    preview.classList.remove ('hidden');
  }
};

const hideIcon = () => {
  for (const icon of resetIcons) {
    icon.classList.add ('hidden');
  }
};

const emptyFields = () => {
  for (const field of resetFields) {
    field.value = '';
  }
};

const resetButton = () => {
  valueName.innerHTML = defaultValues.name;
  valueJob.innerHTML = defaultValues.job;
  profileImage.style.backgroundImage = `url(${defaultValues.photo})`;
  profilePreview.style.backgroundImage = `url(${defaultValues.photo})`;
  hideIcon ();
  emptyFields ();
  fakeColorClick (inputGreen);
  twitterContainer.classList.add ('hidden');
  shareButton.setAttribute ('disabled', false);
  shareButton.classList.remove ('disabled__button');
  localStorage.removeItem ('dataInfo');
  photo.src = defaultValues.photo;
};

getStorage ();

btnReset.addEventListener ('click', resetButton);
valueInputTel.addEventListener ('keyup', previewCardTel);
valueInputEmail.addEventListener ('keyup', previewCardEmail);
valueInputLinkedin.addEventListener ('keyup', previewCardLinkedin);
valueInputGithub.addEventListener ('keyup', previewCardGithub);
valueInputName.addEventListener ('keyup', function (event) {
  previewCard (event, valueName, 'Nombre Apellido');
});
valueInputJob.addEventListener ('keyup', function (event) {
  previewCard (event, valueJob, 'Front-end Developer');
});

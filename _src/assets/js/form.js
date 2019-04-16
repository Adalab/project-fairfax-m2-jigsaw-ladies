"use strict";

const btn = document.querySelector(".btn__reset");
const defaultValues = {
  palette: 1,
  name: "Nombre Apellido",
  job: "Front-end Developer",
  phone: +34666666666,
  email: "sally-hill@gmail.com",
  linkedin: "sally.hill",
  github: "sally-hill"
  /*photo*/
};

const valueInputName = document.querySelector(".input__name");
const valueName = document.querySelector(".preview__title");
const valueJob = document.querySelector(".preview__subtitle");
const valueTel = document.querySelector(".preview__tel");
const linkTel = document.querySelector(".rs__tel");
const valueEmail = document.querySelector(".preview__email");
const linkEmail = document.querySelector(".rs__email");
const valueLinkedin = document.querySelector(".preview__linkedin");
const valueInputJob = document.querySelector(".input__job");
const linkLinkedin = document.querySelector(".link__linkedin");
const valueInputTel = document.querySelector(".input__tel");
const valueInputGithub = document.querySelector(".input__github");
const valueGithub = document.querySelector(".preview__github");
const valueInputEmail = document.querySelector(".input__email");
const linkGithub = document.querySelector(".link__github");

const valueInputLinkedin = document.querySelector(".input__linkedin");
// function resetInfo() {
//     /* Que los emptyValue se sustituyan, al pinchar el botón de reset, por los defaultValues */
//     emptyValues.value = defaultValues.value;
// }

// btn.addEventListener('click', resetInfo);
const dataInfo = {};

function previewCard(event, preview, text, objectKey) {
  const valueInput = event.currentTarget.value;
  if (valueInput === "") {
    preview.innerHTML = text;
  } else {
    preview.innerHTML = valueInput;
    dataInfo[objectKey] = valueInput;
    console.log(dataInfo);
    storage();
  }
}

valueInputName.addEventListener("keyup", function() {
  previewCard(event, valueName, "Nombre Apellido", "name");
});
valueInputJob.addEventListener("keyup", function() {
  previewCard(event, valueJob, "Front-end Developer", "job");
});
valueInputTel.addEventListener("keyup", previewCardTel);
valueInputEmail.addEventListener("keyup", previewCardEmail);
valueInputLinkedin.addEventListener("keyup", previewCardLinkedin);
valueInputGithub.addEventListener("keyup", previewCardGithub);

function previewCardTel(event) {
  const trigger = event.currentTarget;
  const value = trigger.value;

  if (value === "") {
    linkTel.href = "";
    valueTel.classList.add("hidden");
  } else {
    linkTel.href = `"tel:${value}"`;
    valueTel.classList.remove("hidden");
    dataInfo.phone = value;
    storage();
  }
}

function previewCardEmail(event) {
  const trigger = event.currentTarget;
  const value = trigger.value;

  if (value === "") {
    linkEmail.href = "";
    valueEmail.classList.add("hidden");
  } else {
    linkEmail.href = `"mailto:${value}"`;
    valueEmail.classList.remove("hidden");
    dataInfo.email = value;
    storage();
  }
}

function previewCardLinkedin(event) {
  const trigger = event.currentTarget;
  const value = trigger.value;

  if (value === "") {
    linkLinkedin.href = "";
    valueLinkedin.classList.add("hidden");
  } else {
    linkLinkedin.href = `https://www.linkedin.com/in/${value}`;
    valueLinkedin.classList.remove("hidden");
    dataInfo.linkedin = value;
    storage();
  }
}

function previewCardGithub(event) {
  const trigger = event.currentTarget;
  const value = trigger.value;

  if (value === "") {
    linkGithub.href = "";
    valueGithub.classList.add("hidden");
  } else {
    linkGithub.href = `https://github.com/${value}`;
    valueGithub.classList.remove("hidden");
    dataInfo.github = value;
    storage();
  }
}
function storage() {
  localStorage.setItem("dataInfo", JSON.stringify(dataInfo));
}

function getStorage() {
  const savedData = JSON.parse(localStorage.getItem("dataInfo"));
  if (savedData !== "") {
    valueInputName.value = savedData.name;
    valueName.innerHTML = savedData.name;
    valueInputJob.value = savedData.job;
    valueJob.innerHTML = savedData.job;
    valueInputTel.value = savedData.phone;
    linkTel.href = savedData.phone;
    valueInputEmail.value = savedData.email;
    linkEmail.href = savedData.email;
    valueInputLinkedin.value = savedData.linkedin;
    linkLinkedin.href = savedData.linkedin;
    valueInputGithub.value = savedData.github;
    linkGithub.href = savedData.github;
    printIcon(savedData, "email", valueEmail);
    printIcon(savedData, "phone", valueTel);
    printIcon(savedData, "linkedin", valueLinkedin);
    printIcon(savedData, "github", valueGithub);
  }

  function printIcon(object, objectkey, preview) {
    if (object[objectkey] !== "") {
      preview.classList.remove("hidden");
    }
  }
}
getStorage();

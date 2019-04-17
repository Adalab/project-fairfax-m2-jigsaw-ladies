'use strict';

const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');


/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que 
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e 
 */
function getImage(e){
  const myFile = e.currentTarget.files[0];
  // const blob = new Blob([myFile]);
  // const url = URL.createObjectURL(blob);
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}


/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado
   */

   //Empieza base64
  fr.onloadend = function() {
    profileImage.style.backgroundImage = `url(${fr.result})`;
    if (fileField) {
      fr.readAsDataURL (fileField);
    } else {
      profileImage.src = '';
    }
  }
   //Termina base 64
  
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}


/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
 fileField.click(); 
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
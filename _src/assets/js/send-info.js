const shareButton = document.querySelector('.share__button');
const responseURL = document.querySelector('.twitter__container');
const form = document.querySelector('form');

function sendData () {
  const inputs = Array.from(form.elements);
  const json = getJSONFromInputs(inputs);
  json.skills = ['JavaScript', 'React'];
  json.photo = fr.result;
  sendRequest(json);
}

function loadPhoto(){
  const myFile = document.querySelector('#img-selector').files[0];
  fr.addEventListener('load', sendData);
  fr.readAsDataURL(myFile);
}

function getJSONFromInputs(inputs){
  return inputs.reduce(function (acc, val) {
    if(val.nodeName !== 'BUTTON')
      acc[val.name] = val.value;
    return acc;
  }, {})
}

function sendRequest(json){
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function(resp) { return resp.json(); })
    .then(function(result) { showURL(result); })
    .catch(function(error) { console.log(error); });
}

function showURL(result){
  if(result.success){
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  }else{
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}

submitButton.addEventListener('click', loadPhoto);
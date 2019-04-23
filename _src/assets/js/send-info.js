'use strict'

const sendButton = document.querySelector('.share__button');
const form = document.querySelector('form');
const result = document.querySelector('.twitter__container--link');

function waitForIt() {
    event.preventDefault();
    sendRequest();
}

sendButton.addEventListener('click', waitForIt);

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


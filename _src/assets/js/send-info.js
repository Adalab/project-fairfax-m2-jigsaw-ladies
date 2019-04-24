'use strict';

const sendButton = document.querySelector ('.share__button');
const form = document.querySelector ('form');
const urlLink = document.querySelector ('.twitter__container--link');
const urlContainer = document.querySelector ('.twitter__container');
const twitterButton = document.querySelector ('.twitter__container--btn');
const urlGenerated = document.querySelector ('.twitter__container--link');

const tweetCard = () => {
  console.log(urlGenerated.innerHTML);
  const url = 'https://twitter.com/intent/tweet';
  const text = `Esta es mi tarjeta digital creada por JigSaw Ladies. ${urlGenerated.href}`;
  const hashtag = 'JigSawCard,Adalab,Adalabers';
  window.open(`${url}?text=${text};hashtags=${hashtag}`);
};

function waitForIt () {
  event.preventDefault ();
  sendButton.classList.add ('disabled__button');
  sendButton.setAttribute ('disabled', true);
  sendRequest ();
}

function sendRequest () {
  fetch ('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify (dataInfo),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then (function (resp) {
      return resp.json ();
    })
    .then (function (result) {
      showURL (result);
    })
    .catch (function (error) {
      console.log (error);
    });
}

function showURL (result) {
  if (result.success) {
    urlLink.href = result.cardURL;
    urlLink.innerHTML = result.cardURL;
  }
  urlContainer.classList.remove ('hidden');
}

twitterButton.addEventListener ('click', tweetCard);
sendButton.addEventListener ('click', waitForIt);

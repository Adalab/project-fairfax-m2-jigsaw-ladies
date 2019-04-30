'use strict';

const sendButton = document.querySelector ('.share__button');
const urlLink = document.querySelector ('.twitter__container--link');
const urlContainer = document.querySelector ('.twitter__container');
const twitterButton = document.querySelector ('.twitter__container--btn');
const urlGenerated = document.querySelector ('.twitter__container--link');

const tweetCard = () => {
  const url = 'https://twitter.com/intent/tweet';
  const text = `Esta es mi tarjeta digital creada por JigSaw Ladies. ${urlGenerated.href}`;
  const hashtag = 'JigSawCards,Adalab,Adalabers';
  window.open(`${url}?text=${text};hashtags=${hashtag}`);
};

const waitForIt = () => {
  event.preventDefault ();
  sendButton.classList.add ('disabled__button');
  sendButton.setAttribute ('disabled', true);
  sendRequest ();
};

const sendRequest = () => {
  fetch ('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify (dataInfo),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then (response => response.json())
    .then (result => showURL (result))
    .catch (error => console.log (error));
};

const showURL = result => {
  if (result.success) {
    urlLink.href = result.cardURL;
    urlLink.innerHTML = result.cardURL;
  }
  urlContainer.classList.remove ('hidden');
};

twitterButton.addEventListener ('click', tweetCard);
sendButton.addEventListener ('click', waitForIt);

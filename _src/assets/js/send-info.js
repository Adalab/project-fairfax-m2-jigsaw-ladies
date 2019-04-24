'use strict'

const sendButton = document.querySelector('.share__button');
const form = document.querySelector('form');
const urlLink = document.querySelector('.twitter__container--link');
const urlContainer = document.querySelector('.twitter__container');


function waitForIt() {
    event.preventDefault();
    sendButton.classList.add('disabled__button');
    sendButton.setAttribute('disabled', true);
    sendRequest();
}



function sendRequest(){

  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(dataInfo),
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
    urlLink.href = result.cardURL;
    urlLink.innerHTML = result.cardURL;
  }
  urlContainer.classList.remove('hidden');
}
sendButton.addEventListener('click', waitForIt);

// twttr.widgets.createShareButton(
//   "https:\/\/dev.twitter.com\/web\/tweet-button",
//   document.getElementById("tweet-container"),
//   {
//     size: "large",
//     text: "custom share text",
//     hashtags: "example,demo",
//     via: "twitterdev",
//     related: "twitterapi,twitter"
//   }
// );
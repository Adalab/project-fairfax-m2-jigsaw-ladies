'use strict'

const sendButton = document.querySelector('.share__button');
const form = document.querySelector('form');

function waitForIt() {
    event.preventDefault();
}

sendButton.addEventListener('click', waitForIt);
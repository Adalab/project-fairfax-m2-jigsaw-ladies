'use strict';

const designContainer = document.querySelector('.design__container');
const designCollapsible = document.querySelector('.design__collapsible')

const fillContainer = document.querySelector('.fill__container');
const fillCollapsible = document.querySelector('.fill__collapsible')

const shareContainer = document.querySelector('.share__container');
const shareCollapsible = document.querySelector('.share__collapsible')

function collapsible(containerToHide) {
    containerToHide.classList.toggle('hidden__collapsible');
}

designCollapsible.addEventListener('click', function() {collapsible(designContainer)});
fillCollapsible.addEventListener('click', function() {collapsible(fillContainer)});
shareCollapsible.addEventListener('click', function() {collapsible(shareContainer)});
'use strict';

const designContainer = document.querySelector('.design__main__container');
const designCollapsible = document.querySelector('.design__collapsible')

const fillContainer = document.querySelector('.fill__container__section');
const fillCollapsible = document.querySelector('.fill__collapsible')

const shareContainer = document.querySelector('.container__button');
const shareCollapsible = document.querySelector('.share__collapsible')

function collapsible(containerToHide) {
    containerToHide.classList.toggle('hidden__collapsible');
}

designCollapsible.addEventListener('click', function(){collapsible(designContainer)});
fillCollapsible.addEventListener('click', function(){collapsible(fillContainer)});
shareCollapsible.addEventListener('click', function(){collapsible(shareContainer)});
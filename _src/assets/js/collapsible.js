'use strict';

const titleContainer = document.querySelectorAll('.design__title__container');
const containerFull = document.querySelectorAll('.jscontainer');

function closeCollapsible() {
  for (const collapse of containerFull) {
    collapse.classList.add('hidden__collapsible');
  }
}

function collapseSection(event) {
  const trigger = event.currentTarget;
  const resultTrigger = trigger.parentElement.classList.contains('hidden__collapsible');

  if (resultTrigger === true) {
    closeCollapsible();
    trigger.parentElement.classList.remove('hidden__collapsible');
  } else {
    trigger.parentElement.classList.add('hidden__collapsible');
  }
}

for (const container of titleContainer){
  container.addEventListener('click', collapseSection);
}
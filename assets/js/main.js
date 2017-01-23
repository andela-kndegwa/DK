var navElement = document.getElementsByClassName('ka-trigger')[0];
var body = document.getElementsByTagName('body')[0];

navElement.addEventListener('click', toggleNavigation)

function toggleNavigation(event){
  event.preventDefault();
  body.classList.toggle('nav-open')
};

var navElement = document.getElementsByClassName('ka-trigger')[0];
var body = document.getElementsByTagName('body')[0];
var openDiv = document.getElementsByClassName('openDiv')[0];
var checkOutBtn = document.getElementById('checkOutBtn');

navElement.addEventListener('click', toggleNavigation)

function toggleNavigation(event){
  event.preventDefault();
  body.classList.toggle('nav-open')
};

var subBtn = document.getElementById('submit-btn');

subBtn.addEventListener('click', closeModal)

function closeModal(event){
  event.preventDefault()
  openDiv.classList.toggle('modalDialog')
  checkOutBtn.classList.toggle('modalDialog')


}

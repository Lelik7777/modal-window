'use strict';
const modalWidow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btncloseModalWidnow = document.querySelector('.close-modal-window');
const btnsModalWindow = document.querySelectorAll('.show-modal-window');

for (let i = 0; i < btnsModalWindow.length; i++) {
    btnsModalWindow[i].addEventListener('click', function () {
        modalWidow.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}
function addHidden () {
    modalWidow.classList.add('hidden');
    overlay.classList.add('hidden');
}

btncloseModalWidnow.addEventListener('click', addHidden);
overlay.addEventListener('click', addHidden)
document.addEventListener('keydown', function (e) {
    if(e.key === 'Escape' && (!modalWidow.classList.contains('hidden'))) {
        addHidden();
    }
})
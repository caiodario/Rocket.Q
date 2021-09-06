import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

function handleClick(evt, check = true) {
   const text = check ? 'Marcar como lida' : 'Excluir';
   modalTitle.innerHTML = `${text} esta pergunta`;
   modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
   modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
   check
      ? modalButton.classList.remove('red')
      : modalButton.classList.add('red');
   modal.open();
}

// MARK AS READ
const checkButtons = document.querySelectorAll('.actions a.check');
checkButtons.forEach(button => {
   button.addEventListener('click', handleClick);
});

// DELETE QUESTION
const deleteButtons = document.querySelectorAll('.actions a.delete');
deleteButtons.forEach(button => {
   button.addEventListener('click', evt => handleClick(evt, false));
});

export default function Modal() {
   const cancelButton = document.querySelector('.button.cancel');

   const modalwrapper = document.querySelector('.modal-wrapper');
   cancelButton.addEventListener('click', close);

   function open() {
      modalwrapper.classList.add('active');
   }
   function close() {
      modalwrapper.classList.remove('active');
   }

   return { open, close };
}

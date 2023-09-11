(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', handleBackdropClick);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
    refs.modal.classList.toggle('is-hidden');
    window.addEventListener('keydown', handleKeyDown);
  }

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      refs.modal.classList.add('is-hidden');
      document.documentElement.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
    }
  }

  function handleBackdropClick(e) {
    if (e.target === refs.modal) {
      refs.modal.classList.toggle('is-hidden');
      document.documentElement.classList.remove('no-scroll');
    }
  }
})();

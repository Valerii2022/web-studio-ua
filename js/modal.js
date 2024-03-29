import { refs } from './references.js';

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modal.addEventListener('click', handleBackdropClick);
refs.form.addEventListener('submit', handleSubmitForm);
refs.checkboxInput.addEventListener('click', handleCheckboxInputClick);

function toggleModal() {
  document.body.classList.toggle('no-scroll');
  refs.modal.classList.toggle('is-hidden');
  window.addEventListener('keydown', handleKeyDownClick);
}

function handleKeyDownClick(e) {
  if (e.code === 'Escape') {
    refs.modal.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    window.removeEventListener('keydown', handleKeyDownClick);
  }
}

function handleBackdropClick(e) {
  if (e.target === refs.modal) {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.remove('no-scroll');
  }
}

function handleSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.table(data);
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.remove('no-scroll');
  refs.form.reset();
  handleSuccessModalOpen();
  refs.submitBtn.disabled = true;
}

function handleCheckboxInputClick() {
  refs.checkboxInput.checked ? (refs.submitBtn.disabled = false) : (refs.submitBtn.disabled = true);
}

function handleSuccessModalOpen() {
  setTimeout(() => {
    refs.successModal.classList.remove('is-hidden');
    window.addEventListener('keydown', handleKeyDownClick);
  }, 500);
  setTimeout(() => {
    refs.successModal.classList.add('is-hidden');
    window.removeEventListener('keydown', handleKeyDownClick);
  }, 3000);
}

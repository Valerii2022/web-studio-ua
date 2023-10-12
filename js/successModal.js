import { refs } from './references.js';

refs.signForm.forEach(el => el.addEventListener('submit', handleSignFormSubmit));
refs.successCloseBtn.addEventListener('click', handleSuccessCloseBtnClick);
refs.successModal.addEventListener('click', handleBackdropClick);

function handleSignFormSubmit(e) {
  e.preventDefault();
  console.dir({ email: e.target.elements.signUpEmail.value });
  refs.signForm.forEach(el => el.reset());
  handleSuccessModalOpen();
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

function handleSuccessCloseBtnClick() {
  refs.successModal.classList.add('is-hidden');
}

function handleKeyDownClick(e) {
  if (e.code === 'Escape') {
    refs.successModal.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    window.removeEventListener('keydown', handleKeyDownClick);
  }
}

function handleBackdropClick(e) {
  if (e.target === refs.successModal) {
    refs.successModal.classList.toggle('is-hidden');
    document.body.classList.remove('no-scroll');
  }
}

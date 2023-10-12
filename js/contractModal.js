import { refs } from './references.js';

refs.openContractBtn.addEventListener('click', handleContractOpenModalBtnClick);
refs.closeContractBtn.addEventListener('click', handleContractOpenModalBtnClick);
refs.contractModal.addEventListener('click', handleBackdropClick);

function handleContractOpenModalBtnClick() {
  refs.contractModal.classList.toggle('is-hidden');
  window.addEventListener('keydown', handleKeyDownClick);
}

function handleKeyDownClick(e) {
  if (e.code === 'Escape') {
    refs.contractModal.classList.add('is-hidden');
    window.removeEventListener('keydown', handleKeyDownClick);
  }
}

function handleBackdropClick(e) {
  if (e.target === refs.contractModal) {
    refs.contractModal.classList.toggle('is-hidden');
  }
}

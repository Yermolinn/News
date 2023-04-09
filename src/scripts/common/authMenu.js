const signInBtn = document.querySelector('.sign-in-btn');
const signInBtnMob = document.querySelector('.sign-in-btn-mob');
const authMenu = document.querySelector('.auth-menu');
const authCrossBtn = document.querySelector('.auth-cross-btn');
const modal = document.querySelector('.auth-modal');

signInBtn.addEventListener('click', onSignInBtnClick);
signInBtnMob.addEventListener('click', onSignInBtnClick);
authCrossBtn.addEventListener('click', onCrossBtnClick);

function onSignInBtnClick() {
  authMenu.classList.remove('is-hidden');
  document.body.classList.add('modal-is-open');
  authMenu.addEventListener('click', onWindowClick);
}

function onCrossBtnClick() {
  authMenu.classList.add('is-hidden');
  document.body.classList.remove('modal-is-open');
}

function onWindowClick(e) {
  if (e.target === e.currentTarget) {
    authMenu.classList.add('is-hidden');
    document.body.classList.remove('modal-is-open');
    document.removeEventListener('click', onWindowClick);
  }
}
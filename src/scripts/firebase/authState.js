import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebaseApi';
import { users } from '../common/fetchUsers';

const auth = getAuth(app);
const userEl = document.querySelector('.user-tab-pc');
const userMobEl = document.querySelector('.user-mob');
const signInBtn = document.querySelector('.sign-in-btn');
const signInBtnMob = document.querySelector('.sign-in-btn-mob');
const signOutBtn = document.querySelector('.log-out-btn');
const signOutBtnMob = document.querySelector('.log-out-btn-mob');

onAuthStateChanged(auth, checkIsLogin);

function checkIsLogin(user) {
  if (user) {
    users.updateProfile(
      user.displayName,
      user.email,
      user.uid,
      user.accessToken
    );

    onIsLogIn();
  } else {
    onIsLogOut();
  }
}

async function onIsLogIn() {
  userEl.textContent = `Hello, ${users.getName()}!`;
  userMobEl.textContent = `Hello, ${users.getName()}!`;
  signInBtn.disabled = 'true';
  signInBtnMob.disabled = 'true';
  signOutBtn.removeAttribute('disabled');
  signOutBtnMob.removeAttribute('disabled');
}

function onIsLogOut() {
  userEl.textContent = 'Hello, user!';
  userMobEl.textContent = 'Hello, user!';
  signOutBtn.disabled = 'true';
  signOutBtnMob.disabled = 'true';
}
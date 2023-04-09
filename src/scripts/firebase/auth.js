import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { app } from './firebaseApi';
import { spinner } from '../common/libraries';

const auth = getAuth(app);
const regForm = document.querySelector('.reg-form');

regForm.addEventListener('submit', onHandleSubmit);

function onHandleSubmit(e) {
  e.preventDefault();

  const { name, email, password, repeatedPassword } = e.target.elements;

  const passwordValue = password.value.trim();
  const rPasswordValue = repeatedPassword.value.trim();
  if (passwordValue !== rPasswordValue) {
    password.value = '';
    repeatedPassword.value = '';
    Report.failure('You entered different passwords!');
    return;
  }
  const beginWithoutDigit = /^\D.*$/;
  const withoutSpecialChars = /^[^-() /]*$/;
  const containsLetters = /^.*[a-zA-Z]+.*$/;

  if (
    passwordValue.length < 7 ||
    !beginWithoutDigit.test(passwordValue) ||
    !withoutSpecialChars.test(passwordValue) ||
    !containsLetters.test(passwordValue)
  ) {
    password.value = '';
    repeatedPassword.value = '';
    Report.failure(
      'Your password must be at least 7 characters long, and should contain letters!'
    );
    return;
  }

  spinner.spin(document.body);
  creatAccount(name.value.trim(), email.value.trim(), passwordValue);
}

async function creatAccount(name, email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const params = { displayName: name };
    await updateProfile(auth.currentUser, params);
    regForm.reset();
    spinner.stop();

    window.location.href = './index.html';
  } catch (error) {
    const errorMessage = error.message;
    spinner.stop();
    Report.failure(errorMessage);

    // ..
  }

  // .then(userCredential => {
  //   const userData = userCredential.user;
  //
  // })
}
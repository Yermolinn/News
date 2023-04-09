import { getAuth, signOut } from 'firebase/auth';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { app } from './firebaseApi';
import { users } from '../common/fetchUsers';

const auth = getAuth(app);
const signOutBtn = document.querySelector('.log-out-btn');
const signOutBtnMob = document.querySelector('.log-out-btn-mob');

signOutBtn.addEventListener('click', onSignOutBtnCLick);

signOutBtnMob.addEventListener('click', onSignOutBtnCLick);

async function onSignOutBtnCLick() {
  try {
    await signOut(auth);
    // users.resetUser();
    location.reload();
  } catch (error) {
    Report.failure(error);
  }
}
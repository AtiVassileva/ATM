window.onbeforeunload = () => localStorage.clear();

import { handleRegister } from './register/registerHandler.js';
import { handleWithdraw } from './withdraw/withdrawHandler.js';

const addAccountForm = document.getElementsByClassName('form-login')[0];
const withdrawForm = document.getElementsByClassName('form-signup')[0];

addAccountForm.addEventListener('submit', (e) => handleRegister(e));

withdrawForm.addEventListener('submit', (e) => handleWithdraw(e));
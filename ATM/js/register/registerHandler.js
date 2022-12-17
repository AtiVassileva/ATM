import * as validator from '../common/validator.js';

import { showErrors } from '../common/errorHandler.js';
import { setAccountInfo, showAccountInfo } from '../common/accountHelper.js';
import { clearInputField, switchForms } from '../common/elementsHelper.js';

const balanceInputField = document.getElementById('balance-input');
const pinInputField = document.getElementById('pin-input');

export function handleRegister(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let { balance, pin } = Object.fromEntries(formData);

    let balanceErrors = validator.validateBalance(balance);

    if (balanceErrors.length > 0) {
        const balanceErrorsSpan = document.getElementsByClassName('error')[0];
        showErrors(balanceErrors, balanceErrorsSpan);
        clearInputField(balanceInputField, balanceErrorsSpan);
        return;
    }

    let pinErrors = validator.validatePin(pin);

    if (pinErrors.length > 0) {
        const pinErrorsSpan = document.getElementsByClassName('error')[1];
        showErrors(pinErrors, pinErrorsSpan);
        clearInputField(pinInputField, pinErrorsSpan);
        return;
    }

    setAccountInfo(balance, pin);
    showAccountInfo();

    balanceInputField.value = '';
    pinInputField.value = '';

    switchForms();
}
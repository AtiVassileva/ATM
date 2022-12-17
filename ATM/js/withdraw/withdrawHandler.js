import * as validator from '../common/validator.js';

import { showErrors } from '../common/errorHandler.js';
import { clearInputField } from '../common/elementsHelper.js';
import { showAccountInfo } from '../common/accountHelper.js';
import { showWithdrawInfo, showInHistory } from './withdrawNotifier.js';
import { withdrawMoney, calculateBanknotes } from './calculator.js';
import { lockApp } from './appLocker.js';

const amountInputField = document.getElementById('amount-input');
const withDrawPinInputField = document.getElementById('withdraw-pin-input');

const withdrawBtn = document.getElementsByClassName('btn-signup')[0];

let invalidPinAttemptsCount = 0;

export function handleWithdraw(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let { amount, pin } = Object.fromEntries(formData);

    let amountErrors = validator.validateAmount(Number(amount));

    if (amountErrors.length > 0) {
        const amountErrorsSpan = document.getElementsByClassName('error')[2];
        showErrors(amountErrors, amountErrorsSpan);
        clearInputField(amountInputField, amountErrorsSpan);
        return;
    }

    let actualPin = localStorage.getItem('pin');

    if (actualPin != pin) {
        const pinErrorsSpan = document.getElementsByClassName('error')[3];
        invalidPinAttemptsCount++;

        if (invalidPinAttemptsCount % 3 === 0) {
            lockApp(withdrawBtn, withDrawPinInputField, amountInputField, pinErrorsSpan);
            return;
        }

        showErrors(['Invalid PIN! Please try again!'], pinErrorsSpan);
        clearInputField(withDrawPinInputField, pinErrorsSpan);

        return;
    }

    withdrawMoney(Number(amount));

    const banknotes = calculateBanknotes(amount);

    showWithdrawInfo(banknotes, Number(amount), Number(amount * 0.002));
    showAccountInfo();

    showInHistory(Number(amount));

    amountInputField.value = '';
    withDrawPinInputField.value = '';
};
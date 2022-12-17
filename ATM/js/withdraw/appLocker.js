import { showErrors } from '../common/errorHandler.js';

export function lockApp(withdrawBtn, withDrawPinInputField, amountInputField, pinErrorsSpan) {
    withdrawBtn.style.display = 'none';
    withDrawPinInputField.disabled = true;
    amountInputField.disabled = true;

    showErrors(['3 invalid PIN attempts! Please try again in 30 seconds!'], pinErrorsSpan);

    setTimeout(() => {
        withdrawBtn.style.display = 'block';
        withDrawPinInputField.disabled = false;
        amountInputField.disabled = false;
    }, 30000);
};
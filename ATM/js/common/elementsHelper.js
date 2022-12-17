const addAccountBtn = document.getElementsByClassName('switcher-login')[0];
const withdrawSwitcherBtn = document.getElementsByClassName('switcher-signup')[0];

export function clearInputField  (inputField, errorsContainer)  {
    inputField.addEventListener('input', () => errorsContainer.innerHTML = '');
};

export function switchForms() {
    addAccountBtn.parentElement.classList.remove('is-active');
    addAccountBtn.disabled = true;

    withdrawSwitcherBtn.disabled = false;
    withdrawSwitcherBtn.parentElement.classList.add('is-active');
};
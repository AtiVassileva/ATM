const accountInfoDiv = document.getElementsByClassName('account-info')[0];
const currentBalanceInfo = document.getElementsByClassName('current-balance-info')[0];

export function setAccountInfo(balance, pin) {
    localStorage.setItem('balance', balance);
    localStorage.setItem('pin', pin);
};

export function showAccountInfo() {
    accountInfoDiv.style.display = 'block';
    let currentBalance = localStorage.getItem('balance');
    currentBalanceInfo.textContent = `Current balance: ${currentBalance} BGN.`;
};
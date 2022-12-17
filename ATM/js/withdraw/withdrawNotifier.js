import { getShortDate, getLongDate } from './dateGetter.js';
import { getBalance } from '../common/balanceGetter.js';

const withdrawInfoParagraph = document.getElementsByClassName('withdraw-info')[0];

export function showWithdrawInfo(banknotes, amount, fee) {
    const currentBalance = getBalance();

    withdrawInfoParagraph.innerHTML = `
    Last transaction information: <br/> 
    Date of transaction: ${getLongDate()}<br/> 
    Banknotes given: 
    ${Object.keys(banknotes)
        .filter(x => banknotes[x] !== 0)
        .map(x => `<br/> ${x} -> ${banknotes[x]}`)}<br/>  
    Amount: ${amount.toFixed(2)} BGN<br/>
    Fee: ${fee.toFixed(2)} BGN <br/>
    Current Balance: ${currentBalance.toFixed(2)} BGN<br/>`;
};

export function showInHistory(amount) {
    let newBalance = getBalance();

    let historyTableBody = document.getElementsByClassName('history-content')[0];
    
    let fee = amount * 0.002;

    historyTableBody.innerHTML += `<tr>
    <td>${getShortDate()}</td>
    <td>${amount.toFixed(2)} BGN</td>
    <td>${fee.toFixed(2)} BGN</td>
    <td>${newBalance.toFixed(2)} BGN</td>
</tr>`;
};
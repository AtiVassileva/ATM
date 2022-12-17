import { getBalance } from '../common/balanceGetter.js';

export function withdrawMoney(amount) {
    let currentBalance = getBalance();
    let newBalance = (currentBalance - amount - (amount * 0.002));
    localStorage.setItem('balance', newBalance.toFixed(2));
};

export function calculateBanknotes(amount) {
    let hundersCount = Math.floor(amount / 100);
    amount -= hundersCount * 100;

    let fiftiesCount = Math.floor(amount / 50);
    amount -= fiftiesCount * 50;

    let twentiesCount = Math.floor(amount / 20);
    amount -= twentiesCount * 20;

    let tensCount = Math.floor(amount / 10);
    amount -= tensCount * 10;

    return { 100: hundersCount, 50: fiftiesCount, 20: twentiesCount, 10: tensCount };
};
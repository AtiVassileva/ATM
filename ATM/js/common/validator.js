import { getBalance } from './balanceGetter.js';

export function validateBalance(balance) {
    let errors = [];

    if (!balance) {
        errors.push('Balance cannot be empty!');
    }

    if (isNaN(balance)) {
        errors.push('Balance should be a number!');
    }

    if (balance < 0) {
        errors.push('Balance cannot be a negative number!');
    }

    return errors;
};

export function validatePin(pin) {
    let errors = [];

    if (!pin) {
        errors.push('PIN cannot be empty!');
    }

    if (pin.length < 4) {
        errors.push('Pin length should be at least 4 characters!');
    }

    return errors;
};

export function validateAmount(amount) {
    let errors = [];

    if (!amount) {
        errors.push('Amount cannot be empty!');
    }

    if (isNaN(amount)) {
        errors.push('Amount should be a number!');
    }

    if (amount < 1 || amount > 400) {
        errors.push('Amount should be between 1 BGN and 400 BGN!')
    }

    let currentBalance = getBalance();
    let fee = amount * 0.002;

    if (currentBalance < amount + fee) {
        errors.push('Amount cannot be more than current balance!');
    }

    return errors;
};
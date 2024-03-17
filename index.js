"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function isValid(isbn) {
    isbn = isbn.replace(/\s/g, '').replace('X', '10');
    if (isbn.length !== 10) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        const digit = parseInt(isbn[i]);
        if (isNaN(digit)) {
            return false;
        }
        sum += digit * (i + 1);
    }
    const lastDigit = isbn[9];
    const digit = lastDigit === 'X' ? 10 : parseInt(lastDigit);
    if (isNaN(digit)) {
        return false;
    }
    sum += digit * 10;
    return sum % 11 === 0;
}
input.question('Enter ISBN-10 number: ', (isbn) => {
    const answer = isValid(isbn);
    console.log(`${isbn} >> ${answer}`);
    input.close();
});

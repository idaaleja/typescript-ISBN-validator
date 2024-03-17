import * as readline from 'readline';

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isValid(isbn: string): boolean {
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

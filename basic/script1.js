"use strict";

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100){
//     console.log('Too much');
// } else {
//     console.log('Ok!');
// }

// const numb = 50;
// (numb === 50) ? console.log('Ok!') : console.log('Error');

// const num = 51;
// switch (num) {
//     case 49:
//         console.log('Wrong');
//         break;
//     case 100:
//         console.log('Wrong');
//         break;
//     case 50:
//         console.log('Wright');
//         break;
//     default:
//         console.log('No in this time');
//         break;
// }

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i <= 8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i <= 8; i++) {
//     if (i === 6) {
//         //break;
//         continue;
//     }
//     console.log(i);
// }

// *
// **
// ***
// ****
// *****
// ******
// *******

let result = '';
const lengthh = 7;

for (let i = 1; i < lengthh; i++) {
    for (let j = 0; j < i; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result);



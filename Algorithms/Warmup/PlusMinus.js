'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let counter;
    let amountPositive = 0, amountNegative = 0, amountZero = 0;
    for(counter = 0; counter < arr.length; counter++){
        if(Math.sign(arr[counter]) > 0){
            amountPositive = amountPositive + 1;
        }else if(Math.sign(arr[counter]) < 0){
            amountNegative = amountNegative + 1;
        }else{
            amountZero = amountZero + 1;
        }
    }
    console.log(
        (Number(amountPositive) / arr.length).toFixed(6)
        + "\n" +
        (Number(amountNegative) / arr.length).toFixed(6)
        + "\n" +
        (Number(amountZero) / arr.length).toFixed(6)
    );
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
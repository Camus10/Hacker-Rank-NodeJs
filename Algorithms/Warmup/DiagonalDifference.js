'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let counterHead, counterBody;
    let sumDiagonal1 = 0, sumDiagonal2 = 0;
    for(counterHead = 0; counterHead < arr.length; counterHead++){
        for(counterBody = 0; counterBody < arr[counterHead].length; counterBody++){
            if(counterHead == counterBody){
                sumDiagonal1 = sumDiagonal1 + Number(arr[counterHead][counterBody]);
            }
        }
    arr[counterHead].reverse();
    }
    for(counterHead = 0; counterHead < arr.length; counterHead++){
        for(counterBody = 0; counterBody < arr[counterHead].length; counterBody++){
            if(counterHead == counterBody){
                sumDiagonal2 = sumDiagonal2 + Number(arr[counterHead][counterBody]);
            }
        }
    }
    
    return Math.abs(sumDiagonal1 - sumDiagonal2);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

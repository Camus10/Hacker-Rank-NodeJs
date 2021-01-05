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

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let counterAlice, counterBob;
    let scoreAlice = 0, scoreBob = 0;
    for(counterAlice = 0, counterBob = 0; counterAlice < a.length, counterBob < b.length; counterAlice++, counterBob++){
        if(a[counterAlice] > b[counterBob]){
            scoreAlice = scoreAlice + 1;
        }if(b[counterBob] > a[counterAlice]){
            scoreBob = scoreBob + 1;
        }
    }
    
    let scoring = [scoreAlice, scoreBob];
    return scoring;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

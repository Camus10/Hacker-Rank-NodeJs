'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let modifier = s.slice(-2);
    const [time]  = s.split(modifier);
    let [hours, minutes, seconds] = time.split(":");
    
    if(modifier == "AM"){
        if(hours == "12"){
            hours = "00";
            return `${hours}:${minutes}:${seconds}`;
        }else{
            return `${hours}:${minutes}:${seconds}`;
        }
    }else{
        if(12 > parseInt(hours)){
            hours = parseInt(hours) + 12;
            return `${hours}:${minutes}:${seconds}`;
        }else{
            return `${hours}:${minutes}:${seconds}`;
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}

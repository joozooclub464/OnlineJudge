#덧셈식 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let sum;

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    sum = Number(input[0]) + Number(input[1]);
    console.log(Number(input[0]) + " + " + Number(input[1]) + " = " + sum)
    
});

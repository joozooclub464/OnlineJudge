#a와 b 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log('a = ' + Number(input[0]));
    console.log('b = ' + Number(input[1]));
});
/*
기존에 콘솔 찍어서 디버깅하던 습관 때문에 ,로 출력해서 계속 틀렸던 것.
->console.log('a = ',Number(input[0]));

+로 출력하던가 
`a = ${Number(input[0])}\nb = ${Number(input[1])}`
로 줄바꿈 해서 출력해주던가...
값 넣을때 ${}로 넣는거 잊지 말고.
*/

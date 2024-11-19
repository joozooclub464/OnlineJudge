#대소문자 바꿔서 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = "";
    
    for(let i=0; i<str.length; i++) {
        let ascii = str.charCodeAt(i);
        
        if(ascii >= 65 && ascii <= 90) {
            ascii += 32;
        } else {
            ascii -= 32;
        }
        result += String.fromCharCode(ascii);
    }
    console.log(result);
    
});
/*
str.charCodeAt() : 아스키코드값 반환

나중에 다시 풀어봐야 할 문제. 풀이의 도움을 많이 받았음.
*/

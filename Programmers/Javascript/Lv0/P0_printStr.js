#문자열 출력하기
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
    console.log(str);
});

/*
rl.on('line', function (line) {
    input = [line];
});
위 내용은 입력 처리 스트림.
line이벤트는 사용자가 입력 후 엔터를 클릭했을때 동작함.
사용자가 한 줄을 입력하면 line 매개변수에 사용자가 입력한 문자열이 저장됨

}).on('close', function(){
    str = input[0];
    console.log(str);
});
위 내용은 입력 종료 처리.
입력 종료 스트림 close가 실행되고 나서 console에 출력.

console이 close 밖에 위치할 경우 정상적으로 출력되지 않는 것은 비동기 실행 때문.
line과 close이벤트는 입력 후에 발생하여 이벤트 리스너가 호출되기 전 console.log가 실행되기 때문에 정상적으로 출력되지 않음

*/

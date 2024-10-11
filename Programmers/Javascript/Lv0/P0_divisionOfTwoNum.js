#두 수의 나눗셈

function solution(num1, num2) {
    var answer = Math.floor(num1/num2*1000);
    return answer;
}

/*
Math.floor() //소숫점 내림
Math.trunc() //소숫점 이하 버림
*/

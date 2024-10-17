#세균 증식
function solution(n, t) {
    var answer = n;
    for(let a=0; a<t; a++) {
        answer *= 2;
    }
    return answer;
}
/*
2진수의 경우 비트연산자 사용 가능.
시프트 연산자를 쓴 풀이를 보고 머리를 쳤다.. 
*/
function solution(n,t) {
    return n<<t;
}
/*
Math.pow(밑값,지수);
:) 주어진 밑 값을 주어진 지수 값으로 거듭제곱.
*/
function solution(n,t) {
    return n*Math.pow(2,t);
}

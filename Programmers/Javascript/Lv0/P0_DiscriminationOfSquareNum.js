#제곱수 판별하기
function solution(n) {
    var answer = 0;
    for(let i=0; i<n; i++) {
        if(i*i == n) {
            answer = 1;
            break;
        } else {
            answer = 2;
        }
    }
    return answer;
}
/*
처음에 break;를 빼먹어서 틀렸음.
*/
/*
Math.sqrt() : 숫자의 제곱근을 반환.
*/
function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

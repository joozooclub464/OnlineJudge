#flag에 따라 다른 값 반환하기
function solution(a, b, flag) {
    return (flag)? a+b: a-b;
}
function solution(a, b, flag) {
    var answer = 0;
    if(flag) {
        answer = a+b;
    } else {
        answer = a-b;
    }
    return answer;
}

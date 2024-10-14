#나이 출력
function solution(age) {
    var answer = 0;
    answer = 2022 - age +1; 
    return answer;
}
/*
문제에서는 2022년을 기준으로 풀어야 했지만
아래 답안은 현재 년도를 기준으로 계산하는 방법임.
function solution(age) {
    return new Date().getFullYear() - age + 1;
}

*/

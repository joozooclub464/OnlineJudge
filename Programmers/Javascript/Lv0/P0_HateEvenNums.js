#짝수는 싫어요
function solution(n) {
    var answer = [];
    for(let i=1; i<=n; i+=2) {
        answer.push(i);
    }
    return answer;
}
/*
한줄로 간단하게 짜고 싶었는데..결국 다른 분 풀이의 도움을 받았다...
*/
function solution(n) {
    return Array(n).fill(0).map((v,index) => v+1+index).filter((v) => v%2);
}
/*
Array(n)
    .fill(0)                           // [0, 0, 0, ..., 0] 길이가 n인 배열을 0으로 초기화
    .map((v, index) => v + 1 + index)  // [1, 2, 3, ..., n] 배열의 각 인덱스에 1씩 더하여 1부터 n까지의 숫자 생성
    .filter((v) => v % 2);             // 홀수만 남기기
*/

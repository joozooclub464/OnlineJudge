#배열의 평균값
function solution(numbers) {
    var answer = 0;
    for(let a=0; a<numbers.length; a++) {
        answer += numbers[a];
    }
    return answer/numbers.length;
}

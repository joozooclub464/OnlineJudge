#배열의 평균값
function solution(numbers) {
    var answer = 0;
    for(let a=0; a<numbers.length; a++) {
        answer += numbers[a];
    }
    return answer/numbers.length;
}
/*
reduce 함수
numbers.reduce((acc,cur) => acc + cur)
    acc : 누산기. 누적되는 값, 최종적으로 출력되는 값
    cur : 현재 돌고 있는 요소
    위의 식을 풀면
    numbers.reduce((acc,cur) => {
        return acc + cur;    //첫번째 인덱스는 acc에 들어가고 나머지 인덱스는 순차적으로 cur에 들어간다고 생각하기.
    });
출처 :  https://velog.io/@teo_ryu/javascript-reduce-%ED%95%A8%EC%88%98%EC%99%80-%EC%8B%B8%EC%9A%B0%EA%B8%B0

*/
function solution(numbers) {
    return numbers.reduce((acc,cur)=>acc+cur)/numbers.length;
}

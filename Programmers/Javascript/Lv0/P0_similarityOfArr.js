#배열의 유사도
/*
처음에는 java처럼 이중 for문 돌면서 값이 같으면 cnt++ 하려고 했다.
찾아보니 js에서는 연산자로 배열이나 객체를 비교하면 reference타입으로써 값이 비교되지 않고 주소값이 비교된다고 한다.
사실은 오타 떄문에 오답 처리 되었던 것이었지만....
filter와 include를 사용하여 비교하는 방법을 알게 되었다.

filter() : 배열의 요소를 순회하면서 콜백 함수를 사용하여 원하는 조건에 따라 필터링. 필터링된 배열 반환.
includes() : 배열에 특정 요소가 포함되었는지 확인하는 함수. 주어진 요소가 포함되어있으면 true, 아니면 false 반환.
            문자열일 경우 대소문자 구분.
*/

function solution(s1, s2) {
    return s1.filter((e)=>s2.includes(e)).length
}
function solution(s1, s2) {
    var answer = 0;
    for(var i=0; i<s1.length; i++) {
        for(var j=0; j<s2.length; j++) {
            if(s1[i] === s2[j]) {
                answer++;
            }
        }
    }
    return answer;
}

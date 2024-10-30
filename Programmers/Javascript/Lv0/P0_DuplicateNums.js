#중복된 숫자 개수
function solution(array, n) {
    var answer = 0;
    for(let i=0;i<array.length;i++) {
        if(array[i] === n) {
            answer++;
        }
    }
    return answer;
}
function solution(array, n) {
    return array.filter(num => num === n).length;
}
/*
filter 쓸 생각을 못했다. 생각하고 풀자.
*/

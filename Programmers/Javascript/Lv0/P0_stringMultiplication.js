#문자열 곱하기
/*
function solution(my_string, k) {
    var answer = '';
    for(let i=1;i<=k;i++) {
        answer += my_string;
    }
    return answer;
}
*/
function solution(my_string, k) {
    return my_string.repeat(k);
}
/*
string.repeat(반복할횟수)
*/

#배열 뒤집기
function solution(num_list) {
    var answer = [];
    var j = num_list.length
    for(var i = 1; i <= j; i++){
        answer.push(num_list[j-i])
    }
    return answer;
}
/*
.push() : 배열 끝에 하나 이상의 요소를 밀어넣기 하는 함수.
처음에는 num_list 배열의 값에서 하나씩 꺼내어 answer배열에 넣을 생각을 했는데
그냥 역순으로 꺼내서 push 해주면 되는 간단한 문제였다.
*/

#아이스아메리카노
function solution(money) {
    var answer = [];
    answer.push(Math.floor(money/5500));
    answer.push(money%5500);
    return answer;
}

/*
answer.push(parseInd(money/5500)); 도 가능.
아예 배열에 원소로 계산값을 넣은 풀이도 봤다.
return [Math.floor(money / 5500), money % 5500];
*/

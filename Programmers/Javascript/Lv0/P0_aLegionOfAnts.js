#개미 군단
function solution(hp) {
    var answer = 0;
    for(let i=5; i>=1; i-=2) {
        answer += Math.floor(hp/i);
        hp = parseInt(hp%i);
    }
    return answer;
}

/*
나머지를 활용해서 작성한 풀이도 보았다.
return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
*/

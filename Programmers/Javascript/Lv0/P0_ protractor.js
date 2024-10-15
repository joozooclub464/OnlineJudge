#각도기
  function solution(angle) {
    var answer = 0;
    if(angle>0 && angle <90){
        answer = 1
    } else if(angle==90){
        answer = 2
    } else if(angle>90 && angle <180){
        answer = 3
    } else if(angle == 180){
        answer = 4
    }
    return answer;
}
/*
다른사람 풀이를 보던 중 filter를 사용한 풀이를 보았다.
값 리턴을 length로 한것도 참신했고
filter 사용법을 익숙하게 연습해봐야겠다
*/
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}

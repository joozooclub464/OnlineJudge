#양꼬치
function solution(n, k) {
    var answer = 0;
    answer = n * 12000 + k * 2000 - parseInt(n/10)*2000;
    return answer;
}
/*
숫자타입 형변환을 생각 못해서 해멨다..
자바로 풀듯이 그냥 몫 구해서 2000 곱했는데 
몫이 정수가 아닌 값이 나올 수 있으니
parseInt 를 해주던가 Math.floor를 사용해야 한다.
*/

/*
다른 사람 풀이를 보다가 틸트 연산자를 사용한 풀이를 발견했다
~~ 
:) Math.floor와 동등하게 쓰이는 연산자. 소숫점을 버리는 용도로 사용함.
*/
function solution(n, k) {
    k-=~~(n/10);
    if (k < 0) k = 0;
    return n*12000+k*2000;
}

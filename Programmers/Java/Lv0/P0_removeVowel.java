#모음 제거
class Solution {
    public String solution(String my_string) {
        String answer = "";
        answer = my_string.replaceAll("[aeiou]","");
        /*
        String[] arr = my_string.split("");
        for(int i=0; i<arr.length; i++) {
            if(!arr[i].equals("a")&&!arr[i].equals("e")&&!arr[i].equals("i")&&!arr[i].equals("o")&&!arr[i].equals("u")) {
                answer += arr[i];
            }
        }
        */
        return answer;
    }
}

#예전에 풀다가 놔버린 문제를 다시 잡았다.
#전부터 매번 헷갈리던 논리연산자를 잘못써서 틀렸던 문제.
#(왜 맨날 || 와 &&를 헷갈렸는지..ㅎ)
#다 풀고 다른사람 풀이를 보니 replaceAll로 한 줄로 풀어낸 사람이 있었다..
#이렇게 간단한걸 왜 생각 못했지....;;

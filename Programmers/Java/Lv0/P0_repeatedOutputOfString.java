#문자열 반복해서 출력하기
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        String answer = "";
        int n = sc.nextInt();
        System.out.print(str.repeat(n));
    }
}
/*
for문 돌면서 하나씩 넣으려 했는데 다른 풀이를 보니 repeat() 함수를 써서 풀었더라.
repeat()
*/

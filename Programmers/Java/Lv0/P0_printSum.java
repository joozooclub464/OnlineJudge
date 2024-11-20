#덧셈식 출력하기
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int sum = a+b;
        String answer = a + " + " + b + " = " + sum;
        System.out.println(answer);
        sc.close();
    }
}

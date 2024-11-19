#대소문자 바꿔서 출력하기
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.nextLine();
        char[] arr;
// 1. 아스키코드 사용하여 대소문자 변경
        arr = a.toCharArray();
        
        for(int i=0; i<arr.length; ++i) {
            if(65 <= arr[i] && arr[i] <= 90) {
                arr[i] = (char)(arr[i]+32);
                continue;
            }
            if(97 <= arr[i] && arr[i] <= 122) {
                arr[i] = (char)(arr[i]-32);
                continue;
            }
        }
        System.out.print(arr);
        
// 2. toUpperCase toLowerCase 사용하여 대소문자 변경
      
        char b = ' '; //char 선언 시 빈공백이 아닌 그냥 ''로 선언하여 오류 有
        String answer = "";
        
        for(int i=0; i<a.length(); i++) {
            b = a.charAt(i);
            if(Character.isUpperCase(b)) {
                answer += Character.toLowerCase(b);
            }else {
                answer += Character.toUpperCase(b);
            }
        }
        System.out.print(answer);
        
    }
}

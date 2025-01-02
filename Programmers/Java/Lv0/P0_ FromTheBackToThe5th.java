#뒤에서 5등까지
import java.util.Arrays;
class Solution {
    public int[] solution(int[] num_list) {
        Arrays.sort(num_list);
        
        int[] answer = Arrays.copyOf(num_list, 5);
        return answer;
    }
}
/*
에러메시지를 제대로 안 봐서 대체 왜 틀렸나 한참 헤맸다..
임포트..안해줘서 틀림..ㅎ
IDE를 안 쓰고 푸니까 이런
*/

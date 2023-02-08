/**
 * 
 * 문자열 개수를 판별
 * 
 *
 */

function solution(s) {
    var answer = 0;
    for(let i = 0; i < s.length; i++){
        let X = 1;
        let X_no = 0;
        let j = i + 1;
        let check = s[i];
        while(X != X_no){
            if(check === s[j]){
                X++;
            }else{
                X_no++;
            }
            i++;
            j++;
            if(j === s.length){
                answer++;
                return answer;
            }
        }
        answer++;
    }
    return answer;
}
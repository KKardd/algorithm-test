function solution(n) {
    var answer = [0, 0, 1];
    let cnt = 2;
    while(cnt <= n){
        cnt++;  
        answer.push((answer[cnt - 1] + answer[cnt - 2]) % 1234567);
    }
    return answer[cnt];
}
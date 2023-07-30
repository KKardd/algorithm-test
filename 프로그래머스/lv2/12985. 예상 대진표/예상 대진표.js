function solution(n,a,b)
{
    var answer = 1;
    let check_a = a;
    let check_b = b;
    if(a > b){
        while(true){
            if(check_b % 2 === 1 && check_b + 1 === check_a){
                break;
            }
            check_a = Math.ceil(check_a/2);
            check_b = Math.ceil(check_b/2);
            answer++;
        }
    }else{
        while(true){
            if(check_a % 2 === 1 && check_a + 1 === check_b){
                break;
            }
            check_a = Math.ceil(check_a/2);
            check_b = Math.ceil(check_b/2);
            answer++;
        }
    }
    
    
    return answer;
}
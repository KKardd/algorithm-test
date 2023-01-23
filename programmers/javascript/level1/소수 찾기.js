function check(x) {
    if(x === 1) return false;
    for(let j = 2; j <= Math.sqrt(x); j++){
        if(x % j === 0){
            return false;
        }
    }
    return true;
}


function solution(n) {
    var answer = 0;
    for(let i = 1; i < n+1; i++){
        if(check(i) === true){
            answer++;
        }
    }
    return answer;    
    }
    

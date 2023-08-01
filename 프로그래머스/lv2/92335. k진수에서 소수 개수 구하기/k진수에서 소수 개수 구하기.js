function solution(n, k) {
    var answer = 0;
    const str = n.toString(k);
    let arr = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] == 0){
            arr = [];
            continue;
        }
        arr.push(str[i])
        if(str[i+1] == 0 || i === str.length - 1){
            const num = parseInt(arr.join(''));
            let check = true;
            if(num == 1) continue;
            for(let j = 2; j <= Math.sqrt(num); j++){
                if(num % j === 0){
                    check = false;
                    break;
                }
            }
            if(check) answer++;
        }
    }
    return answer;
}
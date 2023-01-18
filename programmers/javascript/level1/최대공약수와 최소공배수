function solution(n, m) {
    var answer = [];
    //최대공약수
    let multi = 0;
    for(let i = 1 ; i <= n ; i++){
        if(n % i === 0 && m % i === 0){
            multi = i;
        }
    }
    answer.push(multi);
    //최소공배수
    let div = 1;
    while(true){
        if(div % n == 0 && div % m == 0){
            break;
        }
        div++;
    }
    answer.push(div);
    return answer;
}
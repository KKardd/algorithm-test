function solution(want, number, discount) {
    var answer = 0;
    let num = 10;
    let i = 0;
    let j = 0;
    let temp = number.map((a) => {
        return a;
    });
    while(num <= discount.length){
        if(i === num){
            j++;
            num++;
            i = j;
            if(Math.max(...temp) === 0){
                answer++;
            }
            temp = number.map((a) => a);
        }else{
            if(want.indexOf(discount[i]) === -1){
                i++;
                continue;
            }else{
            temp[want.indexOf(discount[i])]--;
                i++
            }
        }
    }
    return answer;
}
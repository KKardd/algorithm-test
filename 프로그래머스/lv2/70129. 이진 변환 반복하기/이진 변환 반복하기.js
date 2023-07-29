function solution(s) {
    let zero = 0;
    let cnt = 0;
    let str = s;
    while(str != "1"){
        let temp = 0;
        for(let i = 0; i < str.length; i++){
            if(str[i] == "0"){
                zero++;
                temp++;
            }
        }
        let num = str.length - temp;
        str = num.toString(2);
        cnt++;
        console.log(str)
    }
    
    return [cnt, zero];
}
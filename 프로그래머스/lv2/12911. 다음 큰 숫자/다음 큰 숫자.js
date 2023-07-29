function check(str) {
    let num = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "1"){
            num++;
        }
    }
    return num;
}

function solution(n) {
    var answer = 0;
    let str = n.toString(2);
    const str_one = check(str);
    while(true){
        n++;
        let result = n.toString(2);
        let result_one = check(result);
        if(str_one === result_one){
            return parseInt(result, 2);
        }
    }
}
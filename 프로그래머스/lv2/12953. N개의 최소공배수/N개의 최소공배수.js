function GCD(a, b) {
    const remainder = a % b;
    if(remainder === 0){
        return b;
    }
    return GCD(b, remainder);
}

function solution(arr) {
    var answer = 0;
    arr = arr.sort((a, b) => a - b);
    let i = 0;
    
    while(arr.length != 1){
        arr.push(arr[0] * arr[1] / GCD(arr[0], arr[1]));
        arr.shift();
        arr.shift();
    }
    
    return arr[0];
}

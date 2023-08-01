function solution(s) {
    var answer = [];
    s = s.slice(1, s.length - 1);
    const arr = s.split('{');
    arr.sort((a,b) => {
        if(a.length < b.length){
            return -1
        }
    })
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            let num = "";
            while(isNaN(parseInt(arr[i][j])) === false){
                num += arr[i][j];
                j++
            } 
            if(answer.indexOf(num) === -1){
                answer.push(num);
            }
        }
        
    }
    return answer.filter((item) => item != "").map(item => parseInt(item));
}
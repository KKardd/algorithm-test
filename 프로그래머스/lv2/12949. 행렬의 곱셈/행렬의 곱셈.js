function solution(arr1, arr2) {
    var answer = [];
    arr1.forEach((v, idx) => {
        let arr = [];
        for(let i = 0; i < arr2[0].length; i++){
            let sum = 0;
            for(let j = 0; j < arr2.length; j++){
                sum += v[j] * arr2[j][i];
            }
            arr.push(sum);
        }
        answer.push(arr);
    })
    return answer;
}
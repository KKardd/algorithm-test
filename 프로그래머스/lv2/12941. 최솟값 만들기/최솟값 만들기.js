function solution(A,B){
    var answer = 0;
    const A_sort = A.sort((a,b) => b - a);
    const B_sort = B.sort((a,b) => a - b);
    for(let i = 0; i < A.length; i++){
        answer += A_sort[i] * B_sort[i];
    }
    return answer;
}
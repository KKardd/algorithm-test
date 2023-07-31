function solution(citations) {
    var H_Index = 0;
    citations.sort((a, b) => b - a);
    for(let i = 1; i < citations.length + 1; i++){
        if(i <= citations[i - 1]){
            H_Index = i;
        }
    }
    return H_Index;
    // 1 2 3 4 5 i
    // 0 1 3 5 6 citations[i - 1]
}

function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(i === j){
                continue;
            }
            if(answer.indexOf(numbers[i] + numbers[j]) == -1){
                answer.push(numbers[i] + numbers[j])
                console.log(numbers[i] + numbers[j])
            }
        }
        
    }
    answer.sort((a,b) => a-b)
    return answer;
}

// sort할때 자꾸 오름차순으로 해야하는데 왜 생각을 못하지 진성아?
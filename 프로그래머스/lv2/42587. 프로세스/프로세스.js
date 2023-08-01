function solution(priorities, location) {
    var answer = 1;
    let queue = priorities;
    while(priorities.length > 0){
        const check = queue.shift();
        if(Math.max(...queue) <= check){
            if(location === 0){
                return answer;
            }else{
                answer++;
                location--;
                continue;
            }
        }else{
            queue.push(check);
            if(location === 0){
                location = queue.length - 1;
            }else{
                location--;
            }
            
        }
    }
}
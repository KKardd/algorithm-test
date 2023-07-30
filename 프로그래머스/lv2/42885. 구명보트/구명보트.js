function solution(people, limit) {
    var answer = 0;
    people = people.sort((a,b) => a - b);
    while(people.length > 0){
        if(people.length === 1){
            answer++;
            break;
        }
        let p = people.pop();
        if(p + people[0] > limit){
            answer++;
        }else{
            answer++;
            people.shift()
        }
    }
    return answer;
}
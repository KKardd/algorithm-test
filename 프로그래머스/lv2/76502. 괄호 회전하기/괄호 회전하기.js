function solution(s) {
    //{(})
    var answer = 0;
    let x = s.length;
    for(let i = 0; i < x; i++){
        let check = [0, 0, 0];
        let stack = [];
        for(let j = 0; j < s.length; j++){
            if(s[j] === "{" || s[j] === "[" || s[j] === "("){
                stack.push(s[j]);
            }else{
                if(stack.length === 0){
                    answer--;
                    break;
                }
                const pop = s[j];
                if(pop === "}"){
                    if(stack[stack.length - 1] != "{"){
                        break;
                    }
                }else if(pop === "]"){
                    if(stack[stack.length - 1] != "["){
                        break;
                    }
                }else if(pop === ")"){
                    if(stack[stack.length - 1] != "("){
                        break;
                    }
                }
                stack.pop();
            }
        }
        if(stack.length === 0){
            answer++;
        }
        s = s.slice(1, s.length + 1) + s[0];
    }
    
    return answer;
}
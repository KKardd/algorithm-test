function solution(s)
{
    let stack = [];
    for(let i = 0; i < s.length; i++){
        stack.push(s[i])
        if(stack.length >= 2){
            if(stack.slice(-2, -1).join('') === s[i]){
                stack.pop();
                stack.pop();
            }
        }
    }
    
    if(stack.length === 0){
        return 1
    }else{
        return 0
    }
}
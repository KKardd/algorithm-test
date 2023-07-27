function solution(s){
    if (s[0]===')') {
        return false;
    }
    
    let cnt = 0;
    // for(let i = 0; i < s.length; i++){
    //     cnt += s[i] === "(" ? 1 : -1;
    //     if(cnt < 0) return false;
    // }
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            cnt++;
        }else{
            cnt--;
        }
        if(cnt < 0) return false;
    }
    return cnt === 0 ? true : false;
}


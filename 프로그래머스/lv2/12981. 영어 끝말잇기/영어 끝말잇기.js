function solution(n, words) {
    var answer = [];
    let use_word = [];
    let prv_word = words[0];
    let i;
    for(i = 1; i < words.length; i++){
        if(prv_word[prv_word.length - 1] != words[i][0]){
            i++;
            break;
        }else if(use_word.indexOf(words[i]) != -1){
            i++;
            break;
        }else{
            use_word.push(prv_word);
            prv_word = words[i];
        }
    }
    console.log(i);
    if(prv_word === words[words.length - 1]){
        return [0, 0];
    }
    if(i % n === 0){
        answer.push(n);
        answer.push(i / n);
    }else{
        answer.push(i % n);
        answer.push(Math.ceil(i / n));
    }
    
    return answer;
}
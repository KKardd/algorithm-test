function solution(progresses, speeds) {
    var answer = [];
    let cnt;
    let cnt_return = [];
    for(let i = 0; i < speeds.length; i++){
        cnt = 0;
        for(let j = progresses[i];; j = j + speeds[i]){
            if(j >= 100){
                cnt_return.push(cnt);
                break;
            }else{
                cnt++;
            }
        }
    }
    console.log(cnt_return);    
    let standard = cnt_return[0];
    let sta_cnt = 1;
    for(let i = 0; i < cnt_return.length; i++){
        console.log(standard);
        if(standard >= cnt_return[i + 1]){
            sta_cnt++;
        }else{
            answer.push(sta_cnt);
            standard = cnt_return[i + 1];
            sta_cnt = 1;
        }
    }
    return answer;
}
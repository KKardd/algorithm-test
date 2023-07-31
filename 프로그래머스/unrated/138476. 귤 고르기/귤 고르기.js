
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
function solution(k, tangerine) {
    var answer = 0;
    tangerine.sort((a,b) => a - b);
    console.log(tangerine);
    let cnt = [];
    let arr = [];
    let j = -1;
    for(let i = 0; i < tangerine.length; i++){
        if(arr.indexOf(tangerine[i]) === -1){
            cnt.push(1);
            arr.push(tangerine[i]);
            j++;
        }else{
            cnt[j]++;
        }
    }
    let result = 0;
    cnt.sort((a, b) => b - a);
    console.log(cnt)
    for(let i = 0; i < cnt.length; i++){
        if(result >= k){
            return i;
        }else{
            result += cnt[i];
        }
    }
    return cnt.length;
}

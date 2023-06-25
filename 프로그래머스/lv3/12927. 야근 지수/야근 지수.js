function solution(n, works) {
    works.sort((a,b) => b - a);
    while(n > 0){
        const max = works[0];
        if(Math.max(...works) === 0){
            return 0
        }
        for(let i = 0; i < works.length; i++){
            if(max <= works[i]){
                works[i]--;
                n--;
            }
            if(n === 0) break;
        }
    }
    return works.reduce((acc, cur) => {
        return acc += cur * cur
    }, 0);
}
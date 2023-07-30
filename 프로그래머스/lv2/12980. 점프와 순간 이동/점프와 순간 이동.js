function solution(n)
{
    let jump = 1;
    while(n != 1){
        if(n % 2 === 1){
            jump++;
            n--;
        }else{
            n /= 2;
        }
    }
    return jump;
}
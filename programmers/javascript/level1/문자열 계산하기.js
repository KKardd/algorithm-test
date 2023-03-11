/**
 * my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
 */

function solution(my_string) {
    const arr = my_string.split(' ');
    var answer = parseInt(arr[0]);
    const num = []
    for(let i = 1; i < arr.length; i++){
        if(arr[i] === "+"){
            answer += parseInt(arr[i + 1]);
            i++;
        }else if(arr[i] === "-"){
            answer -= parseInt(arr[i + 1]);
            i++;
        }
    }
    return answer;
}

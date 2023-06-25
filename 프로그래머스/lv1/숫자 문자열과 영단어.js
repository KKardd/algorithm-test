/**
 * 문제 설명
img1.png

네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

숫자	영단어
0	zero
1	one
2	two
3	three
4	four
5	five
6	six
7	seven
8	eight
9	nine
제한사항
1 ≤ s의 길이 ≤ 50
s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.
 */


function switch_str(str) {
    let result = 0;
    switch(str){
        case "zero":
            break;
        case "one":
            result = 1;
            break;
        case "two":
            result = 2;
            break;
        case "three":
            result = 3;
            break;
        case "four":
            result = 4;
            break;
        case "five":
            result = 5;
            break;
        case "six":
            result = 6;
            break;
        case "seven":
            result = 7;
            break;
        case "eight":
            result = 8;
            break;
        case "nine":
            result = 9;
            break;
        default:
            result = -1;
            break;
    }
    return result;
}

function solution(s) {
    var answer = "";
    for(let i = 0; i < s.length; i++){
        let str = "";
        if(Number.isInteger(parseInt(s[i], 10))){
            answer += s[i];
            continue;
        }else{
            while(true){
                if(switch_str(str) != -1){
                    answer += switch_str(str);
                    break;
                }else{
                    str += s[i];
                    i++;
                }
            }
            i--
        }
    }
    return parseInt(answer, 10);
}
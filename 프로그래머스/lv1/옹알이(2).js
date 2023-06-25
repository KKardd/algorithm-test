/**
 * 문제 설명
머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

 */

function solution(babbling) {
    var answer = 0;
    for(let i = 0; i < babbling.length; i++){
        let check = true;
        for(let j = 0; j < babbling[i].length; j++){
            let str = babbling[i][j];
            if(str === "a"){
                if(babbling[i][j+1] === "y" && babbling[i][j+2] === "a"){
                    j += 2;
                    if(babbling[i][j+1] === "a"){
                        check = false;
                        break;
                    }
                }else{
                    check = false;
                    break;
                }
            }else if(str === "y"){
                if(babbling[i][j+1] === "e"){
                    j += 1;
                    if(babbling[i][j+1] === "y"){
                        check = false;
                        break;
                    }
                }else{
                    check = false;
                    break;
                }
            }else if(str === "w"){
                if(babbling[i][j+1] === "o" && babbling[i][j+2] === "o"){
                    j += 2;
                    if(babbling[i][j+1] === "w"){
                        check = false;
                        break;
                    }
                }else{
                    check = false;
                    break;
                }
            }else if(str === "m"){
                if(babbling[i][j+1] === "a"){
                    j += 1;
                    if(babbling[i][j+1] === "m"){
                        check = false;
                        break;
                    }
                }else{
                    check = false;
                    break;
                }
            }else{
                check = false;
                break;
            }
        }
        if(check === true) answer++;
    }
    return answer;
}
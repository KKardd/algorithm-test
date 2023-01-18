function solution(s, n) {
    var answer = '';
    for(let i = 0; i < s.length ; i++){
        let ASCII = s[i].charCodeAt(0);
        if(ASCII === 32){
            answer += ' ';
        }
        else if(ASCII <= 90){
            if(ASCII + n >= 91){
                answer += String.fromCharCode(ASCII+n-26);    
            }else{
                answer += String.fromCharCode(ASCII+n);    
            }
        }else{
            if(ASCII + n > 122){
                answer += String.fromCharCode(ASCII+n-26);    
            }else{
                answer += String.fromCharCode(ASCII+n);    
            }
        }
    }
    return answer;
}

// charCodeAt
// : 문자열 중 하나를 선택하여 아스키코드 번호로 변환해주는 함수

// fromCharCode
// : 아스키코드번호를 받아 문자열을 구성해주는 함수
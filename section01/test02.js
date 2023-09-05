function solution(a, b, c){
    let answer = 'YES!', max;
    let sum = a + b +c;
    if (a < b){
       max = b 
    } else {
        max = a
    }

    if (max < c){
        max = c
    }

    // 두 선분의 길이의 합이 남은 선분의 길이보다 길어야 함
    if((sum - max) < max){
        answer = 'NO!'
    }
    return answer
}


console.log(solution(13, 33, 17))
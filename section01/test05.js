function theSmallest(arr){
    let answer, min = Number.MAX_SAFE_INTEGER;
    arr.forEach(el =>{
        if(el < min) min = el;
    })
    answer = min;
    return answer;
}


let arr = [5, 3, 7, 11, 2, 15, 17]
console.log(theSmallest(arr))
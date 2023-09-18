function theSmallest(arr){
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER
    arr.forEach(el => {
        if(el%2 !== 0){
            sum += el;
            if(el < min) { min = el }
        }
    });
    console.log(sum)
    console.log(min)
}




let arr = [12, 77, 38, 41, 53, 92, 85]
console.log(theSmallest(arr))
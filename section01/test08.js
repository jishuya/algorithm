function solution(arr){
    let sum;
    let result = arr.reduce((acc, v)=> acc + v, 0)
    arr.forEach(el => {
        sum = el
        arr.forEach(el2=>{
            sum += el2
            if(result - sum === 100){
                console.log(i, j)
            }
        })
    }); 
}

let arr=[22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));





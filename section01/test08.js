function solution(arr){
    let sum;
    let result = arr.reduce((acc, v)=> acc + v, 0)
    
    arr.forEach((el,idx) => {
        sum = el
        arr.forEach((el2,idx)=>{
            sum += el2
            if(result - sum === 100){
                arr.splice(idx, 1)
                arr.splice(idx, 2)
                console.log(arr)
            } else {
                sum = el
            }
        })
    }); 
}

let arr=[22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));





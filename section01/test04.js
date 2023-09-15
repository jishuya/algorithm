function sum(num){
    let tot = 0;
    for(let i = 1; i <= num; i++){
        tot += i
    }
    
    return tot
}


console.log(sum(10))
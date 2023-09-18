function vehicle(variable, array){
    let result = 0
    array.forEach(el => {
        if(el % 10 === variable){
            result += 1
        }
    });
    return result
}

let aa = 3
let array = [25, 23, 11, 47, 53, 17, 33]

let bb = 0
let array2 = [12, 20, 54, 30, 87, 91, 30]


console.log(vehicle(bb, array2))
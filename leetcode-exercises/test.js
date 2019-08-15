// Find x to the nth power without using built in methods 


let multiply = ( x, n ) => {
    var num = x; 
    for (let i = 0; i < n; i++) {
         num = num * x
         console.log(num)
    }
    return num
}

console.log(multiply(2, 4))
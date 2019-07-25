// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let maxSum = 0;
    let minSum = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (arr[i] < min) {
            min = arr[i]
        }
        else if (arr[i] > max) {
            max = arr[i]
        }
    }
    maxSum = sum - min;
    minSum = sum - max; 
    console.log(minSum + ' ' + maxSum)
}
    
    // Output:          10 14
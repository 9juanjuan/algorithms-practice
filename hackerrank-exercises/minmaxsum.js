// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
        let max = Math.max(...arr);
        let min = Math.min(...arr);
        let maxSum = 0;
        let minSum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== min) {
                maxSum += arr[i]
            }
            if (arr[i] !== max) {
                minSum += arr[i]
            }
            if (arr[i] === min) {
            }
        }
        console.log (minSum+ ' '+maxSum)
    }
    
    // Output:          10 14
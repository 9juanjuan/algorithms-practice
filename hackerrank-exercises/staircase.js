// Function Description

// Complete the staircase function in the editor below. It should print a staircase as described above.
// staircase has the following parameter(s):
// n: an integer
// Input Format
// A single integer, , denoting the size of the staircase.
// Output Format
// Print a staircase of size  using # symbols and spaces.
// Note: The last line must have  spaces in it.


function staircase(n) {
    let empty = " "
    let hash = "#"
    for (let i = n; i > 0; i--) {
        let string = empty.repeat(i-1) + hash; 
        hash += "#";
        console.log(string)
    }
}

// staircase(6) output
//     #
//    ##
//   ###
//  ####
// #####
//######
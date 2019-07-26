// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.


var isPalindrome = function(s) {
    let lowerStr = s.toLowerCase(); 
    lowerStr = lowerStr.replace(/[\W_]/g, '');
    console.log(lowerStr)
    let splitStr = lowerStr.split('');
    for (let i =0 ; i< splitStr.length/2; i++) {
        if (splitStr[i]!== splitStr[splitStr.length-1-i]) {
            return false
        }
    }
    return true
};

// Input 
// "A man, a plan, a canal: Panama"
// Output
// True 
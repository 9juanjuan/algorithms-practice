// Given a string, find the length of the longest substring without repeating characters.


var lengthOfLongestSubstring = function(s) {
    let splitString = s.split("")
    console.log(splitString)
    var longest = ""; 
    var longestValue = 0;

    for (let i = 0; i < splitString.length; i++) {
        // longest.concat(splitString[i])
        if (longest.includes(splitString[i]) && longest.length > longestValue) {
            longestValue = longest.length;
            console.log(longestValue)
            longest = splitString[i];
        } else if (!longest.includes(splitString[i])) {
            longest+= splitString[i]
        }

    }
    return longestValue
}

console.log( lengthOfLongestSubstring("abcabcbb"))
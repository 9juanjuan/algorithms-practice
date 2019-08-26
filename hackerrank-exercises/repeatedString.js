// Lilah has a string,s , of lowercase English letters that she repeated infinitely many times.

// Given an integer,n , find and print the number of letter a's in the first  letters of Lilah's infinite string.

// For example, if the string = 'abcac' and n= 10, the substring we consider is abcacabcac, the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

function repeatedString(s, n) {
let leftover = n % s.length; 
let iterations = Math.floor(n/s.length); 
let output = '';
let counter = 0; 
for ( let i = 0; i <iterations;i++ ) {
    output += s; 
    console.log('This is our output : ' + output);
}
if (leftover > 0) {
    for (let i = 0; i < leftover; i++) { 
        output += s[i]
    }
}
for (let i = 0; i < output.length; i++){
    if (output[i] === 'a') {
        counter ++;
    }
}
return counter; 

}
console.log(repeatedString('abc', 7)); 
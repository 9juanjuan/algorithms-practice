// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces

function getCount(str) {
    var vowelsCount = 0;
    
    const split = str.split("") 
    for (let i=0; i< split.length; i++){
      if(split[i] === 'a'|| split[i] ==='e'|| split[i] === 'i'|| split[i] === 'o'||
      split[i] === 'u') {
      vowelsCount+=1
      }
    }
    return vowelsCount;
  }
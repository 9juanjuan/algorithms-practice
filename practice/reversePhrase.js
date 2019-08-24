//  Given a phrase reverse the order of characters of each word

function phraseReversal(string) {
    let splitString = string.split(" "); 
    let newString = [];
    for (phrase of splitString) {
        let word = ""
        for (let i =phrase.length-1 ; i >= 0 ; i--) {
           word += phrase[i]
        }    
        newString.push(word)
    }
    return newString.join(" "); 
    // splitString.forEach( phrase => {
    //     let word = ""
    //     for (let i =phrase.length-1 ; i >= 0 ; i--) {
    //        word += phrase[i]
    //     }    
    //     newString.push(word)
    // }) 
    // return newString;
}

console.log(phraseReversal('I love javascript!')); 
// given a phrase, capitalize each word 

function capitalize (phrase) {
    let capitalizedWords = [] 
    for (word of phrase.split(" ")) {
        capitalizedWords.push(word[0].toUpperCase()+word.slice(1))
    }
    return capitalizedWords; 
}

console.log(capitalize ("i do not understand"));
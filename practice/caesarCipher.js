function caesarCipher (phrase, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    let newPhrase = phrase.toLowerCase(); 
    let output = ""; 

    for (let i = 0; i<newPhrase.length; i++) {
        const letter = newPhrase[i];
        if (alphabet.indexOf(letter) ===- 1)    {
            output +=letter;
            continue;
        }
        let index = alphabet.indexOf(letter) + shift % 26;
        if (index > 25) {
            index -=26;
        }
        if (index < 0) {
            index += 26;
        }
        output += newPhrase[i] === phrase[i].toUpperCase() ? alphabet [index].toUpperCase() 
            : alphabet[index];
    }
    return output;
}

console.log (caesarCipher("I am cool", 1));
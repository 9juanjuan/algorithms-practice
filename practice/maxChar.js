function maxChar(string) {
    let characters = {};
    for(let character of string) {
        characters[character] = characters[character] + 1 || 1;

        if(characters[character]) {
            characters[character]= characters[character]+1
        } else {
            characters[character] = 1;
        }
    }
    return characters;
}
console.log(maxChar('lolllllloooai'));
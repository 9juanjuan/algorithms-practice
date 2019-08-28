function anagram (string1, string2) {
    let hashtable = {} 
    for (character of string1) {
        hashtable[character] = hashtable[character] +1 || 1
    }
    for (character of string2) {
        if (!hashtable[character]){
            return false
        }
        if (character === hashtable[character]) {
            hashtable[character] = hashtable[character]-1;
            console.log(hashtable)
        }
        if (hashtable[character] < 0) {
            return false
        }
        return true
    }


}
console.log(anagram ('loolujwild', 'lllooohaha'));
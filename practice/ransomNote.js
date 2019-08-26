const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
 function ransomNoteCheck (randomNote, magazine) {
    let splitMagazine = magazine.replace(/[^\w\s]/gi, '').split(" ");
    let splitNotes = randomNote.replace(/[^\w\s]/gi, '').split(" "); 
    let magazineTable = {}; 
    // populate table with words in magazine and frequency
    for (word of splitMagazine) {
        magazineTable[word] = magazineTable[word] +1 || 1;
    }

    // iterate through notes and see if note exists in magazine. 
    for (word in magazineTable) {
        console.log(word+ " appears : " + magazineTable[word]);
    }


    for (word of splitNotes) {
        // false if it doesn't exist
        if (!magazineTable[word]) {
            return false; 
        }
        // if it exists then sub 1 
        if (magazineTable[word]) {
            magazineTable[word] = magazineTable[word] -1;
            if (magazineTable[word] < 0) {
                return false;
            }
        }
    }
    return true; 

    // return magazineTable;
 }

 console.log(ransomNoteCheck('in! in in', magazine)) 
// Given an array , return an array in the reverse order without using the reverse method 

function reverseArray (array) {
    for (let i = 0; i < array.length /2 ; i++) {
        let tempHolder = array[i];
        array[i] = array[array.length -1 - i]
        array[array.length-1 -i] = tempHolder;
    }
    return array
}

console.log(reverseArray([1, 2, 3, 4, 5]));
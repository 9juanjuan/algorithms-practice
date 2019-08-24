function intRev (int) {
    let newInt = int.toString();
    newInt = newInt.split("").reverse().join("")
    return parseInt(newInt);
}

console.log(intRev(-24));
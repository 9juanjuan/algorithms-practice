function rotLeft(a, d) {
    let tempArr = a.slice(1);
    for (let i = 0; i < d; i++) {
        tempArr.push(a[i]);
        if ( i < d-1) {
        tempArr = tempArr.slice(1);
        }
    }
    return tempArr
}

console.log(rotLeft([1, 2, 3, 4, 5], 3))
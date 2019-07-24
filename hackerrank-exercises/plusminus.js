 
   function plusMinus(arr) { 
    let pos = 0;
    let neg = 0;
    let zer = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos += (1 / arr.length); 
        } else if (arr[i] < 0) {
            neg += (1 / arr.length); 
        } else if (arr[i] == 0) {
            zer += (1 / arr.length);
        }
    }
    console.log(pos);
    console.log(neg);
    console.log(zer);
}

// Output
// 0.5
// 0.3333333333333333
// 0.16666666666666666
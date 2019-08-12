// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2){
    if (array1.length === null || array2.length === null) {
      return false 
    }
    else {
      let square;
      let counter = 0;
  
      for (let i=0; i <  array1.length; i++) {
          square = Math.sqrt(array2[i])
          for (let j=0; j < array2.length; j++) {
            if ( square === array1[j]) {
                  counter +=1; 
                  console.log(counter);
                  break;
              } 
          }
      }
        console.log(counter)
        console.log(array1.length);
        if (counter < array1.length) {
        return false
        } else if (counter >= array1.length) {
        return true 
        }
      }
  }
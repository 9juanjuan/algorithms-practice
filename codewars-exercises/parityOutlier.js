// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
function findOutlierB(integers) {
    var evenArr = integers.filter(function(num) {
      return num % 2 === 0;
    });
    var oddArr = integers.filter(function(num) {
      return num % 2 !== 0;
    });
    if (evenArr.length === 1) {
      return evenArr[0];
    } else {
      return oddArr[0];
    }
  }

findOutlierB([4, 1, 2]); // 1
findOutlierB([2, 4, 0, 100, 4, 11, 2602, 36]); // 11
findOutlierB([160, 3, 1719, 19, 11, 13, -21]); // 160
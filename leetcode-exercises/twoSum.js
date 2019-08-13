// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function(nums, target) {
    let diff; 
     for (let i=0; i< nums.length; i++){
         let diff = target -nums[i];
           if (nums.includes(diff) && nums.indexOf(diff) !==i) {
             return [[i], nums.indexOf(diff)]
          }
     }
 };

//  twoSum([2, 7, 11, 15], 9)
// Output [0,1] 
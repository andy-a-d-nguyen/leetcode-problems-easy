/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2


Constraints:

n == nums.length
1 <= n <= 5 * 104
-231 <= nums[i] <= 231 - 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: an array of nums of size n
// Output: a number
// Constraints: n == nums.length
//              1 <= n <= 5 * 104
//              -231 <= nums[i] <= 231 - 1
// Edge cases: None. The majority element always exists
var majorityElement = function(nums) {
  // create an object to store for element count
  // iterate over input array
    // store current element's count in object
  // iterate over object
    // if current property's count is more than n / 2
      // return current key
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    if (!count[nums[i]]) {
      count[nums[i]] = 1;
    } else {
      count[nums[i]]++;
    }
  }
  for (let key in count) {
    if (count[key] > (nums.length / 2)) {
      return key;
    }
  }
};

/*
Alternate solution:
var majorityElement = function(nums) {
  var obj = {};

  for(var i = 0; i < nums.length; i++){
      obj[nums[i]] = obj[nums[i]] + 1 || 1;
      if(obj[nums[i]] > nums.length / 2)  return nums[i];
  }

};
 */
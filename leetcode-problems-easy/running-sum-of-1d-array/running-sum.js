/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.



Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]


Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Input: an array of nums
// Output: an an array of nums
// Constraints: 1 <= nums.length <= 1000
//              -10^6 <= nums[i] <= 10^6
// Edge cases: none
var runningSum = function(nums) {
  // create a result array
  // iterate over input array
    // at current element, call reduce on a sliced array inclusive of current element
    // push result of reduce to result array
  // return result array
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let runningArr = nums.slice(0, i + 1);
    let sum = runningArr.reduce((acc, val) => acc + val);
    result.push(sum);
  }
  return result;
};

/*
Optimal solution:
const runningSum = nums => {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
}
*/
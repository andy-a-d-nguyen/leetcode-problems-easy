/*
7. Reverse Integer
Easy

4264

6582

Add to List

Share
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0


Constraints:

-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
// Input: an integer
// Output: input integer reversed
// Constraint: -2^31 <= x <= 2^31 - 1
// Edge case: 0 => return 0
var reverse = function(x) {
  // get absolute of input
  // convert input to string
  // split string into array
  // reverse array
  // join array into string
  // convert string into number
  // multiply number by sign of input and assign to a variable
  const reversedNum =  parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
  return (reversedNum >= (-2)**31 && reversedNum <= 2**31 - 1) ? reversedNum : 0;
};
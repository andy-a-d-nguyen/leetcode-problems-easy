/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.



Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// input: an array of characters
// output: the same array with all characters' position reversed
// constraint: modify the input array in-place with O(1) extra memory
// edge cases: none
var reverseString = function(s) {
  // create a pointer that points to the first index
  // create a pointer that points to the last index
  // while first pointer is smaller than second pointer
    // swap elements at the two pointers
    // increment first pointer
    // decrement second pointer
  let firstPointer = 0;
  let secondPointer = s.length - 1;
  while (firstPointer < secondPointer) {
    let temp = s[firstPointer];
    s[firstPointer] = s[secondPointer];
    s[secondPointer] = temp;
    firstPointer++;
    secondPointer--;
  }
};
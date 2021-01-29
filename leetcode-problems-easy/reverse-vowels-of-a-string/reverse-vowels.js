/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
Note:
The vowels does not include the letter "y".
/*

/**
 * @param {string} s
 * @return {string}
 */
// input: string
// output: string with vowels' position reversed
// constraints: none
// edge cases: none
var reverseVowels = function(s) {
  // create a string of vowels
  // create a first pointer
  // create a second pointer
  // split input string into an array
  // create an array to store index of vowels
  // iterate over array
    // if current character is a vowel
      // push index to array of vowels
  // assign first pointer to first index in array of vowels
  // assign second pointer to last index in array of vowels
  // while first pointer is smaller than second pointer
    // swap character positions in array
    // increment first pointer
    // decrement second pointer
  // return joined array
  let vowels = 'aeiouAEIOU';
  let firstPointer;
  let secondPointer;
  let arr = s.split('');
  let vowelIndexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (vowels.indexOf(arr[i]) > -1) {
      vowelIndexes.push(i);
    }
  }
  firstPointer = 0;
  secondPointer = vowelIndexes.length - 1;
  while(firstPointer < secondPointer) {
    let temp = arr[vowelIndexes[firstPointer]];
    arr[vowelIndexes[firstPointer]] = arr[vowelIndexes[secondPointer]];
    arr[vowelIndexes[secondPointer]] = temp;
    firstPointer++;
    secondPointer--;
  }
  return arr.join('');
};
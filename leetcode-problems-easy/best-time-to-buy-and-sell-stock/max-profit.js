/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

// Input: an array of prices
//        prices[i] = price of a stock on the ith day
// Output: maximum possible profit from buying on one day and selling on another day
// Constraints: 1 <= prices.length <= 105
//              0 <= prices[i] <= 104
// Edge cases: none
var maxProfit = function(prices) {
  // create an assumption for the max profit
  // store a mininum price
  // iterate over input array
    // find the minimum between the current price and the minimum price
    // find the maximum between the assumption and the difference between the current price and the minimum
  let result = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    result = Math.max(result, prices[i] - min);
  }
  return result;
};

/*
Optimal solution:
var maxProfit = function(prices) {
  var min = Number.MAX_SAFE_INTEGER;
  var max = 0;
  for (var i = 0; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
      max = Math.max(max, prices[i] - min);
  }
  return max;
};
 */
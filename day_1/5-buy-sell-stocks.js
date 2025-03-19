// Ques 5 - Best time to buy and sell stocks
// Your are given an array prices where prices[i] is the price of a given stock
// on the ith day
// you want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell the stock
// return the maximum profit if you cannot achive any profit, return 0

// Input: prices = [7,1,5,3,6,4] -----> Output: 5
// Input: prices = [7,6,4,3,1] ----> Output: 0

function maxProfit1(prices) {
  let globalProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];

      if (currentProfit > globalProfit) globalProfit = currentProfit;
    }
  }
  return globalProfit;
}

const maxProfit = function (prices) {
  let minStockPurchasePrice = prices[0] || 0;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minStockPurchasePrice) {
      minStockPurchasePrice = prices[i];
    }
    profit = Math.max(profit, prices[i] - minStockPurchasePrice);
  }
  return profit;
};

function maxProfit(prices: number[]): number {
  let minPrice = prices[0]; // lowest price so far
  let maxProfit = 0;        // highest profit so far

  for (let i = 1; i < prices.length; i++) {
    // if current price is lower, update min price
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    // calculate profit if sold today
    let currentProfit = prices[i] - minPrice;

    // update max profit if current profit is bigger
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
// Given an array of stock prices, find the minimum buy price and the maximum sell price that produce the greatest profit.

function maxProfit(prices) {
    // determine what the0 base min buy price is 
    let minBuyPrice = prices[0] < prices[1] ? prices[0] : prices[1];
    // determine what the base max sell price is 
    let maxSellPrice = prices[0] < prices[1] ? prices[1] : prices[2];
    // sell price - buy price 
    let maxProfit = maxSellPrice - minBuyPrice;
    // temp holder for buy price
    let tempBuyPrice = minBuyPrice;

    for (let index = 2; index < prices.length; index++) {
        const sellPrice = prices[index];

        if (minBuyPrice > sellPrice) {
            tempBuyPrice = sellPrice;
        } else {
            const profit = sellPrice - minBuyPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
                maxSellPrice = sellPrice;
                minBuyPrice = tempBuyPrice;
            }
        }
    }

    return [minBuyPrice, maxSellPrice];
}

console.log(maxProfit([2, 10, 5, 1, 3]))
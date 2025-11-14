# find the pair of prices that will yield the maximum profit.
# [7,1,5,3,6,4] 

def maxProfit(prices):
    if len(prices) == 0:
        return  0

    min_price = prices[0]
    max_profit = 0

    for price in prices[1:]:
        if price < min_price:
            min_price = price

        profit = price - min_price

        if profit > max_profit:
            max_profit = profit

    return max_profit
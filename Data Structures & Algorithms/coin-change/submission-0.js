class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = new Array(amount + 1).fill(Infinity);

        dp[0] = 0;

        for(let currentAmount = 1; currentAmount <= amount; currentAmount++){
            for(const coin of coins){
                if(coin <= currentAmount){
                    dp[currentAmount] = Math.min(
                        dp[currentAmount],
                        1 + dp[currentAmount - coin]
                    )
                }
            }
        }

        return dp[amount] === Infinity ? -1 : dp[amount];
    }
}

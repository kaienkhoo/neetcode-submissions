class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let totalTank = 0;
        let currentTank = 0;
        let start = 0;

        for(let i = 0; i < gas.length; i ++){
            let netGain = gas[i] - cost[i];
            totalTank += netGain;
            currentTank += netGain;

            if(currentTank < 0){
                start = i + 1;
                currentTank = 0;
            }
        }

        return totalTank >= 0 ? start : -1;
    }
}

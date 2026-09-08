class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const buckets = Array.from({length: nums.length + 1}, () => []);
        let count = new Map();

        for(let num of nums){
            count.set(num, (count.get(num) || 0) + 1);
        }

        for(let [num,freq] of count){
            buckets[freq].push(num);
        }

        let result = [];

        for(let i = buckets.length - 1; i >= 0; i--){
            for(let num of buckets[i]){
                result.push(num);

                if(result.length === k){
                    return result;
                }
            }
            
        }
    }
}

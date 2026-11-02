class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = Array.from({length: nums.length + 1}, () => []);
        const count = new Map();

        for(const num of nums){
            count.set(num, (count.get(num) || 0) + 1);
        }

        for(const [num, freq] of count){
            bucket[freq].push(num);
        }

        let result = [];

        for(let i = bucket.length - 1; i >= 0; i--){
            for(let num of bucket[i]){
                result.push(num);

                if(result.length === k){
                    return result;
                }
            }
        }
    }
}

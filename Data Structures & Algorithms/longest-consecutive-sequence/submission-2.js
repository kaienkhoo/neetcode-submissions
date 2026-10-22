class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for(let i = 0; i < nums.length; i++){
            const num = nums[i];

            if(!set.has(num - 1)){
                let length = 1;

                while(set.has(num + length)){
                    length++;
                }

                longest = Math.max(longest, length)
            }

        }

        return longest
    }
}

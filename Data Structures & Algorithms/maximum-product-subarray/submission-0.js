class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let currentMax = nums[0];
        let currentMin = nums[0];
        let productMax = nums[0];

        for(let i = 1; i < nums.length; i++){
            let prevMax = currentMax;

            currentMax = Math.max(
                nums[i],
                currentMax * nums[i],
                currentMin * nums[i]
            );

            currentMin = Math.min(
                nums[i],
                prevMax * nums[i],
                currentMin * nums[i]
            );

            

            productMax = Math.max(productMax, currentMax);


        }

        return productMax;
    }
}

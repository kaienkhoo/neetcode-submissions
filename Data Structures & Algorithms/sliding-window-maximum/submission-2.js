class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const dequeue = [];
        const result = [];
        let left = 0;

        for(let right = 0; right < nums.length; right++){
            while(
                dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[right]
            ){
                dequeue.pop();
            };

            dequeue.push(right);

            if((right - left + 1) > k){
                if(dequeue[0] === left){
                    dequeue.shift();
                }

                left++;
            }

            if((right - left + 1) === k){
                result.push(nums[dequeue[0]]);
            }
        }
        
        return result;
    }
}

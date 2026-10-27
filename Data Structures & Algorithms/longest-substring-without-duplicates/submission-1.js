class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let set = new Set();
        let maxLength = 0;

        for(let right = 0; right < s.length; right++){
            const char = s[right];

            while(set.has(char)){
                set.delete(s[left]);

                left++;
            }

            set.add(char);

            maxLength = Math.max(maxLength, set.size)
        }

        return maxLength;
    }
}

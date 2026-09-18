class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let count = {}
        let maxLength = 0;
        
        for(let right = 0; right < s.length; right++){

            count[s[right]] = (count[s[right]] || 0) + 1;

            let maxFreq = Math.max(...Object.values(count));

            while((right - left + 1) - maxFreq > k){
                count[s[left]]--;
                left++;
            }

            maxLength = Math.max(maxLength,right - left + 1);
        }

        return maxLength;

    }
}

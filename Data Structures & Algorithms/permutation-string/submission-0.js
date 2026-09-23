class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0;
        let length = s1.length;
        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);

        for(const char of s1){
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            count1[index]++;
        }

        for(let right = 0; right < s2.length; right ++){
            const index = s2[right].charCodeAt(0) - 'a'.charCodeAt(0);
            count2[index]++;

            while(right - left + 1 > length){
                const leftIndex = s2[left].charCodeAt(0) - 'a'.charCodeAt(0);
                count2[leftIndex]--;
                left++;
            }

            let same = true;

            for (let i = 0; i < 26; i++) {
                if (count1[i] !== count2[i]) {
                    same = false;
                    break;
                }
            }

            if (same) {
                return true;
            }

            
        }

        return false;

    
    }
}

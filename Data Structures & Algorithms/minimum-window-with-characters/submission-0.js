class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let left = 0;
        let needMap = new Map();
        let windowMap = new Map();

        if(t.length > s.length){
            return "";
        }

        for(const char of t){
            needMap.set(char, (needMap.get(char)|| 0) + 1);
        }

        let need = needMap.size;
        let have = 0;
        let resultStart = 0;
        let resultLength = Infinity;

        for(let right = 0; right < s.length; right++){
            const char = s[right];
            windowMap.set(char, (windowMap.get(char) || 0) + 1);

            if(
                needMap.has(char) && windowMap.get(char) === needMap.get(char)
            ){
                have++;
            }

            while(need === have){
                const windowLength = right - left + 1;

                if(windowLength < resultLength){
                    resultStart = left;
                    resultLength = windowLength;
                }

                const char = s[left];

                windowMap.set(char,windowMap.get(char) - 1);

                if(
                    needMap.has(char) && windowMap.get(char) < needMap.get(char)
                ){
                    have--;
                }

                left++;
            }

        }

        return resultLength === Infinity ? "" : s.slice(resultStart, resultStart+resultLength)
        
        
       
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();

        if(s.length !== t.length){
            return false;
        }

        for(let letter of s){
            map.set(letter, (map.get(letter) || 0) + 1);
        }

        for(let letter of t){
            if(!map.get(letter)){
                return false;
            }

            map.set(letter, map.get(letter) - 1);
        }

        return true;
    }
}

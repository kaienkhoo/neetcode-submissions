class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';

        for(let word of strs){
            result += `${word.length}#${word}`;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let result = [];

        while(i < str.length){
            let j = i;

            while(str[j] !== "#"){
                j++;
            }

            const length = Number(str.slice(i,j));
            const start = j + 1;
            const end = start + length;

            result.push(str.slice(start,end));

            i = end;
        }

        return result;
    }
}

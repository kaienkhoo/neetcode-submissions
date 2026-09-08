class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const pairs = new Map([
            [')','('],
            ['}','{'],
            [']','[']
        ])

        for(let char of s){
            if(!pairs.has(char)){
                stack.push(char);
            }else{
                if(pairs.get(char) === stack[stack.length - 1]){
                    stack.pop();
                }else{
                    return false;
                }
            }
        }

        return stack.length === 0;
    }

}

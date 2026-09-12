class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const stack = [];
        const result = [];

        function backtracking(open,close){
            if(open === n && close === n){
                result.push(stack.join(''));
                return
            }

            if(open < n){
                stack.push('(');
                backtracking(open + 1, close);
                stack.pop();
            }

            if(close < open){
                stack.push(')');
                backtracking(open, close + 1);
                stack.pop();
            }
        }

        backtracking(0,0);

        return result;
    }
}

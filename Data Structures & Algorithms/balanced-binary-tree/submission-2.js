/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let isBalanced = true;

        function dfs(node){
            if(node === null){
                return 0;
            }

            let leftNode = dfs(node.left);
            let rightNode = dfs(node.right);

            if(Math.abs(leftNode - rightNode) > 1){
                isBalanced = false;
            }

            return 1 + Math.max(leftNode, rightNode);
        }

        dfs(root);

        return isBalanced;
    }
}

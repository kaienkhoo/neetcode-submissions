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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {

        function dfs(node, remaining){
            if(node === null){
                return false;
            }

            if(node.left === null && node.right === null){
                return node.val === remaining;
            }

            remaining -= node.val;

            return dfs(node.left, remaining) || dfs(node.right, remaining)
        }

        return dfs(root,targetSum)
    }
}

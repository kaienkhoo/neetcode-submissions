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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let depth = 0

        function dfs(node){
            if(node === null){
                return 0;
            }

            let leftNode = dfs(node.left);
            let rightNode = dfs(node.right);

            depth = Math.max(depth, leftNode + rightNode);

            return 1 + Math.max(leftNode,rightNode);
        }

        dfs(root);

        return depth;
    }
    
}

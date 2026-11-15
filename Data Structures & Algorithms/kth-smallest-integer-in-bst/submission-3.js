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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        let answer;

        function dfs(node) {
            if (node === null || answer !== undefined) {
                return;
            }

            dfs(node.left);

            if (answer !== undefined) {
                return;
            }

            count++;

            if (count === k) {
                answer = node.val;
                return;
            }

            dfs(node.right);
        }

        dfs(root);

        return answer;
    }
}

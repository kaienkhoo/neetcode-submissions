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
    maxDepth(root) {
        if(root === null){
            return 0;
        }

        let depth = 0;
        let queue = [root];

        while(queue.length > 0){
            let levelSize = queue.length;

            for(let i = 0; i < levelSize; i ++){
                let node = queue.shift();

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }

            depth++;
        }

        return depth;

        
    }
}

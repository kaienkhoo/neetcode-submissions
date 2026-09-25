/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let map = new Map();

        function dfs(node){
            if(node === null) return null;

            if(map.has(node)){
                return map.get(node);
            }

            let copy = new Node(node.val);
            map.set(node, copy);

            for(let neighbor of node.neighbors){
                copy.neighbors.push(dfs(neighbor))
            }

            return copy;
        }

        return dfs(node);
    }
}

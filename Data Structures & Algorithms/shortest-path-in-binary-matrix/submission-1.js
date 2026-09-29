class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        let queue = []
        let head = 0
        let pathLength = 1;
        let n = grid.length;

        if(grid[0][0] === 1 || grid[n-1][n-1] === 1){
            return -1;
        } 

        queue.push([0,0])   
        grid[0][0] = 1;

        let directions = [
            [1,0],
            [-1,0],
            [0,1],
            [0,-1],
            [-1,-1],
            [-1,1],
            [1,-1],
            [1,1]
        ]

        while(head < queue.length){
            let levelSize = queue.length - head;

            for(let i = 0; i < levelSize; i++){
                let [r,c] = queue[head++];

                if(r === n - 1 && c === n - 1){
                    return pathLength;
                }

                for(let [dr,dc] of directions){
                    let newR = r + dr;
                    let newC = c + dc;

                    if(
                        newR >= 0 && newR < n && newC >= 0 && newC < n && grid[newR][newC] === 0
                    ){
                        grid[newR][newC] = 1;
                        queue.push([newR,newC]);
                    }
                }
                
            }

            pathLength++;
        }

        return -1;
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let queue = [];
        let head = 0;
        let freshCount = 0;
        let minutes = 0;

        for(let row = 0; row < grid.length; row++){
            for(let col = 0; col < grid[0].length; col++){
                if(grid[row][col] === 2){
                    queue.push([row,col]);
                }else if(grid[row][col] === 1){
                    freshCount++;
                }
            }
        }

        let directions = [
            [1,0],
            [-1,0],
            [0,1],
            [0,-1]
        ]

        while(head < queue.length && freshCount > 0){
            let levelSize = queue.length - head;

            for(let i = 0; i < levelSize; i++){
                let [r,c] = queue[head++];

                for(let [dr,dc] of directions){
                    let newRow = r + dr;
                    let newCol = c + dc;

                    if(
                        newRow >= 0 &&
                        newRow < grid.length &&
                        newCol >= 0 && 
                        newCol < grid[0].length &&
                        grid[newRow][newCol] === 1
                    ){
                        queue.push([newRow,newCol]);
                        grid[newRow][newCol] = 2;
                        freshCount--;
                    }
                }
            }

            minutes++;
        }

        return freshCount === 0 ? minutes : -1;
    }
}

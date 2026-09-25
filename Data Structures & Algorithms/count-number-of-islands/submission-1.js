class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;

        function bfs(row,col){
            let queue = [[row,col]];
            grid[row][col] = '0';

            while(queue.length > 0){
                let [r,c] = queue.shift();

                let directions = [
                    [-1,0],
                    [1,0],
                    [0,-1],
                    [0,1]
                ]

                for(let [dr,dc] of directions){
                    let newRow = r + dr;
                    let newCol = c + dc;

                    if(
                        newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length && grid[newRow][newCol] === '1'){
                        grid[newRow][newCol] = '0';
                        queue.push([newRow,newCol]);
                    }

                }
            }


   
        }

        for(let row = 0; row < grid.length; row++){
            for(let col = 0; col < grid[0].length; col++){
                if(grid[row][col] === '1'){
                    islands++;
                    bfs(row,col);
                }
            }
        }

        return islands;
    }
}

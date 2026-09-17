class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let area = 0;
        let maxArea = 0;

        function dfs(row,col){
            if(
                row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0
            ){
                return;
            }

            grid[row][col] = 0;
            area ++;

            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        }


        for(let row = 0; row < grid.length; row++){
            for(let col = 0; col < grid[0].length; col++){
                if(grid[row][col] === 1){
                    area = 0;
                    dfs(row,col);
                    maxArea = Math.max(maxArea, area)
                }
            }
        }

        return maxArea;
    }
}

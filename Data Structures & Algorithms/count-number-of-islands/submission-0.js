class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;

        function dfs(row,col){
            if(
                row < 0 || row > grid.length - 1 || col < 0 || col > grid[0].length - 1 || grid[row][col] === '0'
            ){
                return;
            }

            grid[row][col] = '0';

            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        }

        for(let row = 0; row < grid.length; row++){
            for(let col = 0; col < grid[0].length; col++){
                if(grid[row][col] === '1'){
                    islands++;
                    dfs(row,col);
                }
            }
        }

        return islands;
    }
}

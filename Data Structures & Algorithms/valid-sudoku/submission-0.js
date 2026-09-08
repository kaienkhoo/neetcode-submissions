class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: board.length}, () => new Set());
        const columns = Array.from({length: board.length}, () => new Set());
        let map = new Map();

        for(let row = 0; row < board.length; row++){
            for(let col = 0; col < board.length; col++){
                let value = board[row][col];

                if(value === '.'){
                    continue;
                }

                let key = `${Math.floor(row/3)},${Math.floor(col/3)}`

                if(!map.has(key)){
                    map.set(key, new Set());
                }


                if(rows[row].has(value) || columns[col].has(value) || map.get(key).has(value)){
                    return false;
                }

                rows[row].add(value);
                columns[col].add(value);
                map.get(key).add(value);
            }
        }

        return true;
    }
}

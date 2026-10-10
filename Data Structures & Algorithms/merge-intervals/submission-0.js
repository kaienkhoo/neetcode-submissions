class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const result = [];
        intervals.sort((a,b) => a[0] - b[0]);
        result.push(intervals[0])

        for(let i = 1; i < intervals.length; i++){
            let current = result[result.length - 1]

            if(intervals[i][0] <= current[1]){
                current[1] = Math.max(current[1],intervals[i][1]);
            }else{
                result.push(intervals[i])
            }
        }

        return result;
    }
}

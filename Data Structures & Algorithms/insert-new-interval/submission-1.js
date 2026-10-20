class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];

        for(let i = 0; i < intervals.length; i++){
            let current = intervals[i];

            if(current[1] < newInterval[0]){
                result.push(current)
            }else if(current[0] > newInterval[1]){
                result.push(newInterval);
                result.push(...intervals.slice(i))

                return result;
            }else{
                newInterval = [Math.min(current[0],newInterval[0]),Math.max(current[1],newInterval[1])]
            }
        }

        result.push(newInterval);
        return result;
    }
}

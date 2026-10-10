class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];

        for(let i = 0; i < intervals.length; i++){
            const current = intervals[i];

            if(current[1] < newInterval[0]){
                result.push(current);
            }else if(current[0] > newInterval[1]){
                result.push(newInterval);
                result.push(...intervals.slice(i));

                return result;
            }else {
                newInterval = [Math.min(newInterval[0], current[0]), Math.max(newInterval[1], current[1])];
            }


        }

        result.push(newInterval);
        return result;
    }
}

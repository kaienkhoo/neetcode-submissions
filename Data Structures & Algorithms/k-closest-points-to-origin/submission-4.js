class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MaxPriorityQueue(
            ([x,y]) => x * x + y * y
        );

        for(const point of points){
            const [x,y] = point;

            heap.enqueue([x, y]);

            if(heap.size() > k){
                heap.dequeue();
            }
        }

        return heap.toArray();

    }
}

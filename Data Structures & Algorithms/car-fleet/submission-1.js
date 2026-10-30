class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];
        const pairs = [];

        for(let i = 0; i < position.length; i++){
            pairs.push([position[i], speed[i]]);
        }

        pairs.sort((a,b) => b[0] - a[0]);

        for(const [pos, spd] of pairs){
            const timeToTarget = (target - pos) / spd;

            if(stack.length === 0 || timeToTarget > stack[stack.length - 1]){
                stack.push(timeToTarget);
            }
        }

        return stack.length;
    }
}

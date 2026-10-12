class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = Array.from({length: numCourses}, () => []);
        const state = new Array(numCourses).fill(0);

        for(const [course, prereq] of prerequisites){
            graph[prereq].push(course);
        }

        const dfs = (course) => {
            if(state[course] === 1) return false;

            if(state[course] === 2) return true;

            state[course] = 1;

            for(const nextCourse of graph[course]){
                if(!dfs(nextCourse)){
                    return false;
                }
            }

            state[course] = 2;

            return true;
        }

        for(let course = 0; course < numCourses; course++){
            if(!dfs(course)) return false;
        }

        return true
    }
}

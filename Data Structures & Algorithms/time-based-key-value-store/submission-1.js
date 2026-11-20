class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)){
            return "";
        }

        const value = this.keyStore.get(key);

        let left = 0;
        let right = value.length - 1;
        let result = "";

        while(left <= right){
            let mid = Math.floor((right + left) / 2);

            const [storedTimestamp, storedValue] = value[mid];

            if(storedTimestamp <= timestamp){
                result = storedValue;
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }

        return result;
    }
}

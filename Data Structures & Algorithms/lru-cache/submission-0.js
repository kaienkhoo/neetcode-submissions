class Node {
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.dummyHead = new Node(null,null);
        this.dummyTail = new Node(null,null);

        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)) return -1;

        let node = this.map.get(key);
        this.remove(node);
        this.addToMRU(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            let node = this.map.get(key);
            node.value = value;
            this.remove(node);
            this.addToMRU(node);
            return;
        }else{
            let newNode = new Node(key,value);
            this.map.set(key,newNode);
            this.addToMRU(newNode);

            if(this.map.size > this.capacity){
                let lru = this.dummyHead.next;

                this.remove(lru);
                this.map.delete(lru.key);
            }
        }
    }

    remove(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    addToMRU(node){
        let prev = this.dummyTail.prev;

        prev.next = node;
        node.prev = prev;
        node.next = this.dummyTail;
        this.dummyTail.prev = node;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class Queue {
    constructor() {
        this.start = null;
        this.end = null;
        this.length = 0;

    }

    enqueue(value) {
        let newNode = new Node(value);

        if (this.start == null) {
            this.start = this.end = newNode;
            this.length += 1;
            return;
        }

        this.length += 1;
        this.end.next = newNode;
        this.end = newNode;
    }

    dequeue() {
        this.length--;
        this.start = this.start.next;
    }

    isempty() {
        return this.length == 0
    }


    peek() {
        return this.start.value
    }

}




// Example

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(8)
queue.enqueue(3)
queue.dequeue()
console.log(queue.peek()) //ans: 8
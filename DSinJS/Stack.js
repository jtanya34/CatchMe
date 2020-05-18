class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if (!this.top) {
            return null;
        }

        return this.top.value;
    }

    pop() {

        let deletedNode = this.top.value;
        this.top = this.top.next
        return deletedNode;
    }

    push(value) {
        let newNode = new Node(value);

        if (this.top == null) {
            this.top = this.bottom = newNode;
            this.length += 1;
            return;
        }

        this.length += 1;
        newNode.next = this.top;
        this.top = newNode;
    }
}
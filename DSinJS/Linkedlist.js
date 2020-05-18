const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    append(value) {
        let Mynode = new Node(value);
        if (!this.head) {
            this.head = this.tail = Mynode
            return;
        }

        this.tail.next = Mynode
        this.tail = this.tail.next
    }

    prepend(value) {
        let Mynode = new Node(value);
        Mynode.next = this.head
        this.head = Mynode
    }

    insert(value, Atvalue) {
        let currentValue = this.head.value;
        let currentHead = this.head;
        let newNode = new Node(value);
        while (currentValue != Atvalue) {
            currentHead = currentHead.next;
            currentValue = currentHead.value
        }

        let next = currentHead.next;
        currentHead.next = newNode;
        newNode.next = next;
    }

    printLinkedList() {
        let next = this.head
        let array = [];
        while (next) {
            let value = next.value
            array.push(value)
            next = next.next
        }
        console.log(array)
    }

    deleteHead() {
        this.head = this.head.next
    }

    deleteTail() {
        if (this.head === this.tail) {
            this.head = this.tail = null
            return;
        }
        let next = this.head.next;
        let prevHead = this.head;

        while (next.next != null) {
            prevHead = next
            next = next.next
        }
        this.tail = prevHead
        this.tail.next = null
    }

    deleteValue(value) {
        if (this.head === this.tail && this.head.value === value) {
            return this.head = this.tail = null
        } else if (this.tail.value === value) {
            this.deleteTail()
            return;
        } else if (this.head.value === value) {
            this.deleteHead()
            return;
        }
        let next = this.head
        let prev = this.head
        while (prev.value != value) {
            prev = next
            next = next.next
        }
        prev.value = next.value
        prev.next = next.next
    }

    SearchValue(value) {

        let next = this.head
        let flag = false
        while (next) {
            if (next.value === value) {
                flag = true
                break;
            } else {
                next = next.next
            }
        }
        return flag;
    }


    DupValue() {
        this.printLinkedList();
        let currentHead = this.head
        let obj = {}
        while (currentHead) {
            if (obj[currentHead.value]) {
                if (currentHead.next != null) {
                    currentHead.value = currentHead.next.value
                    currentHead.next = currentHead.next.next
                } else {
                    this.deleteTail();
                    currentHead = currentHead.next
                }
            } else {
                obj[currentHead.value] = 1
                currentHead = currentHead.next
            }
        }
        this.printLinkedList();
    }

    klastValue(k) {
        let currentHead = this.head
        let KthHead = this.head
        let count = 0;
        while (count < k) {
            KthHead = KthHead.next
            count++
        }
        while (KthHead) {
            KthHead = KthHead.next
            currentHead = currentHead.next
        }
        return currentHead
    }


    midValue() {
        let currentHead = this.head
        let count = 0;
        let midNode = ''
        while (currentHead) {
            currentHead = currentHead.next
            count++
        }
        if (count % 2) {
            midNode = this.klastValue((count + 1) / 2)
        } else {
            midNode = this.klastValue((count + 1) / 2)
        }
        midNode.value = midNode.next.value;
        midNode.next = midNode.next.next
    }

    reverse(head) {
        if (head.next === null) {
            return head
        }

        let prevhead = head
        let nexthead = head.next;
        head.next = null;
        while (nexthead != null) {
            let dummy = prevhead
            prevhead = nexthead
            nexthead = nexthead.next
            prevhead.next = dummy
            console.log(nexthead)
        }
        this.printLinkedList()
    }

    palindrom() {
        let currentHead = this.head;
        let count = 0;
        let size = 0
        let array = []
        while (currentHead) {
            currentHead = currentHead.next
            size++
        }
        let current = this.head;

        while (count < size / 2) {
            count++
            if (!(!size % 2 == 0 && count > size / 2)) {
                array.push(current.value)

            }
            current = current.next;

        }
        while (count < size) {
            if (array[array.length - 1] === current.value) {
                array.pop()
                current = current.next;
                count++
            } else if (array.length > 0) {
                return false
            }

        }
        return true;

    }


    loop() {
        let slow = this.head
        let fast = this.head.next.next

        while (true) {
            if (slow === fast) {
                return true;
            }
            if (slow === null || slow.next === null || fast === null || fast.next === null) {
                return false;
            }
            slow = slow.next
            fast = fast.next.next
        }
    }


}

module.exports = LinkedList;

let list = new LinkedList();

list.append(10);
list.append(10);
list.append(7);
list.append(100);
list.append(1);
list.tail.next = list.head


//list.printLinkedList();
console.log(list.loop())
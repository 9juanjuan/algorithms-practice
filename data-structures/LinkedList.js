class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    // Insert first node 
    insertFirst(data) {
        this.head = new Node(data, this.head); 
        this.size++;
    }
    // Insert last node 
    insertLast (data) {
        let node = new Node(data);
        let current;
        // edge case if empty, make it the head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head; 
            // while there is a node at the next position
            while(current.next) {
                current = current.next; 
            }
            current.next = node; 
        }
        this.size++;

    }
    // Insert at index
    insertAt (data, index) {
        // edge cases if index doesn't exist (out of range)
        if(index > 0 && index > this.size) {
            return;
        }

        // if it is the first index, set it to head
        if(index === 0) {
            this.head = new Node(data, this.head); 
            return;
        }

        const node = new Node(data); 
        let current, previous
        // set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current; // Node before the index
            count++; 
            current = current.next; // Node after the index
        }
        // new node next should be value of current
        node.next = current; 
        previous.next = node;

        this.size++; 
    }
    // Get at index
    getAt(index) {
        let current = this.head; 
        let count = 0; 

        while(current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next; 
        }
        return null; 
    }
    // Remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head; 
        let previous; 
        let count = 0; 

        // Remove first 
        if (index === 0) {
            this.head = current.next; 
        } else {
            while(count < index) {
                count++; 
                previous = current; 
                current = current.next; 
            }
            previous.next = current.next; 
        }
        this.size--;
    }
    // Clear list
    clearList() {
        this.head = null; 
        this.size = 0; 
    }
    // Print list data 
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next; 
        }
    }

}

const n1 = new Node (100);
console.log (n1);

const ll = new LinkedList();
const ll2 = new LinkedList(); 

// ll.insertFirst(n1);
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400); 
// ll.clearList();
// ll.insertAt(500,2);

// ll.removeAt(2);
ll.printListData();
// ll.getAt(10); 
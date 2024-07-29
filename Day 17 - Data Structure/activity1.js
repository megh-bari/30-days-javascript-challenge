// ! Activity 1: Linked List

// * Task 1

class Node{
    constructor( value ){
        this.value = value;
        this.next = null
    }
}

const nodeOne = new Node(2);
const nodeTwo = new Node(3);
const nodeThree = new Node(4);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
console.log( `Node One : ${nodeOne}` )

// * Task 2

class LinkedList {

    constructor( ){
        this.head = null;
        this.tail = null;
    }

    addNode( value ){
        const newNode = new Node( value );
        if( !this.head ){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    removeNode(){
        let currentNode = this.head;
        while( currentNode.next !== this.tail ){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
    }

    displayNodes(){
        let currentNode = this.head;
        while( currentNode ){
            console.log( currentNode.value );
            currentNode = currentNode.next;
        }
    }
}


const linkedList = new LinkedList();
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.removeNode();
linkedList.displayNodes();

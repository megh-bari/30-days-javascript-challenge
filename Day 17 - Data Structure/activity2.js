// ! Activity 2: Stack

// * Task 3

class Stack {

    constructor() {
        this.stack = [];
    }

    // push method 
    push( value ) {
        this.stack[ this.stack.length ] = value  
    }

    // pop method
    pop() {
        this.stack.length = this.stack.length - 1;  
    }

    // peek method
    peek() {
        console.log( this.stack[ this.stack.length - 1 ] )
    }

}


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.peek()
stack.pop()
stack.peek()

// * Task 4

class Stack2 {

    constructor() {
        this.stack = []
        this.reverse = ""
    }

    getString( value ) {
        for (let index of value) {
            this.stack.push( index )
        }
    }

    reverseString() {
        let length = this.stack.length

        while ( length > 0 ) {
            this.reverse += this.stack.pop()
            length--
        }
        console.log( this.reverse )
    }
}


const reverse = new Stack2()

reverse.getString("aayush")
reverse.reverseString()

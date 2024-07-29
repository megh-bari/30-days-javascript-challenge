// ! Activity 3: Queue

// * Task 5

class Queue{
    constructor(){
        this.queue = []
    }

    enqueue( value ){
        this.queue[ this.queue.length ] = value           
    }

    dequeue(){
        for ( let index = 1 ; index < this.queue.length ; index++ ){    
            this.queue[ index-1 ] = this.queue[ index ]               
        }                                                                   
        this.queue.length = this.queue.length - 1   
    }

    front(){
        console.log( this.queue[0] )
    }

}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.front()
console.log( queue )
queue.dequeue()
queue.front()
console.log( queue )


// * Task 6

class PrinterQueue{

    constructor(){
        this.queue = []
    }    

    addJobToTheQueue( value ){
        this.queue.push( value )
    }

    processJobInTheQueue(){

        let length = this.queue.length 
        while( length > 0 ){
            console.log( this.queue.shift() )
            length --
        }
    }
}


const printer = new PrinterQueue()

printer.addJobToTheQueue("Queue Job One")
printer.addJobToTheQueue("Queue Job Two")
printer.addJobToTheQueue("Queue Job Three")
printer.addJobToTheQueue("Queue Job Four")
printer.addJobToTheQueue("Queue Job Five")
printer.processJobInTheQueue()

class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(elt){
        this.items.push(elt);
    }
    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        // 0 index ki value ko delete delete and shift
        // Shift function karta hai
        const remove=this.items.shift();
        return remove;
    }
    getFront(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[0];
    }
    getRear(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
    getSize(){
        return this.items.length;
    }
}

// Running The Code.....
const queue=new Queue;
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log("Front="+queue.getFront()+" Rear="+queue.getRear());
const x=queue.dequeue();
console.log("Deleted value="+x)
console.log("Front="+queue.getFront()+" Rear="+queue.getRear());

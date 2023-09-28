class MyStack{
    constructor(){
        this.queue = [];
    
    }

    push(value){
        this.queue.push(value);
        for(let i=0;i<this.queue.length-1;i++){
            this.queue.push(this.queue.shift());
        }
    }

    pop(){
        return  this.queue.shift();
    }

    top(){
        return   this.queue[0];
    }

    empty(){
        return this.queue.length ===0;
    }
}
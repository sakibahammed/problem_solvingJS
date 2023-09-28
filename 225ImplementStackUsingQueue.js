class Node{

}


class Myqueue{
    constructor(){

    }
    enqueue(){}

    dequeue(){}
}


class MyStack{
    constructor(){
        this.q1 = new Myqueue()
        this.q2 = new Myqueue()
    }
    push(value){
        this.q1.enqueue(value);
    }
    pop(){
        while(true){
            this.q2.enqueue(this.q1.dequeue());
        }
    }
    top(){
        
    }
    empty(){}
}




let myStack =  new MyStack();
myStack.push(10);

myStack
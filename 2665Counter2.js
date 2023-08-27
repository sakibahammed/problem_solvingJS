// we need to return function in object that will count , reset and decrement the value; 

var createCounter= function(init){
    let counterIn = init;

    function increment(){
        return ++counterIn
    }
    function decrement(){
        return --counterIn
    }
    function reset(){
        return init;
    }

    return{increment,decrement,reset}
}
console.log(createCounter(10));
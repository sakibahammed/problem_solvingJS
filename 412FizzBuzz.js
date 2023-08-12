var fizzBuzz = function(n) {
    let newArray = []
    for(let i= 1;i<=n;i++){
    

      if(i%3==0){
        newArray.push("Fizz");
        continue;
      }  
      if(i%5==0){
        newArray.push('Buzz');
        continue;
      }
      if(i%15==0){
        newArray.push('FizzBuzz');
        continue;
      }
    

      newArray.push(i.toString())
       
    
    }
    return newArray;
};
console.log(fizzBuzz(15));
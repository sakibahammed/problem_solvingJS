var superPower = function(a,b){

   const number = Number(b.join('')); //  to join the number from Array;
   
   const result = Math.pow(a,number)
   return result;
    
}

console.log(superPower(2 , [1,0]));



//  const numbers = [1,2,3,4,5];
//  const ttl = Number(numbers.join(''));
//  console.log(ttl);
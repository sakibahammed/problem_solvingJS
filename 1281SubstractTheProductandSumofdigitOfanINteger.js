// const number = 123;
// const digit = String(number).split('').map(Number);

// console.log(digit);



var subtractProductAndSum = function(n){
    
    const numberArray = String(n).split('').map(Number);
    let multiplication = 1;
    let sum= 0;
    let result; 
    for(let i=0;i<numberArray.length;i++){
        multiplication = multiplication * numberArray[i];
        sum = sum + numberArray[i]
        
        result = multiplication - sum;
    }

    return result



}


console.log(subtractProductAndSum(234));
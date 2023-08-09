const MIN = -2147483648;
const MAX = 2147483648;

var reverse = function(x) {
    
  let reversed = parseInt(x.toString().split('').reverse().join(''));
  if(x<0){
    reversed = reversed * (-1)
  }
  if(reversed<MIN || reversed>MAX){
    return 0
  }
  return reversed
 
};  


console.log(reverse(-12));
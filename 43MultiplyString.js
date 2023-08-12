var multiply = function(num1, num2) {
    let firstNumber = parseInt(num1)  ;
    let secondNumber = paresInt(num2);
      let result = firstNumber * secondNumber;
     
      return result.toString()
  };


  // primitive way ;;

  var multiply = function(num1, num2) {
    let firstNumber = BigInt(num1)  ;
    let secondNumber = BigInt(num2);
      let result = firstNumber * secondNumber;
     
      return result.toString()
  };
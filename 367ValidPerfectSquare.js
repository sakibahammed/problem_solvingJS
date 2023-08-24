var isPerfectSquare = function(num) {
    let result = Math.sqrt(num);
    if(Number.isInteger(result)){ // kono ekta number integer kina eta check korar jonno  Number.isInteger use kora hoi
        return true;
    }  
    else{
        return false
    }
};
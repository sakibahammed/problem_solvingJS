var isPalindrome = function(x){
    let reversedNumber = parseInt(x.toString().split('').reverse().join(''));
    if(x===reversedNumber){
        return true
    }
    else{
        return false
    }
    
}

console.log(isPalindrome(-121));
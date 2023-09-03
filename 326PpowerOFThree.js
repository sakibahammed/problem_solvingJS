var isPowerOfThree = function(n){
    if(n<1){
        return false;
    }

    for(let i=0;i<=n;i++){
        let num = Math.pow(3,i);
        if(num ===n){
            return true;
        }
        if(num>n){
            return false;
        }
    }
}

var countPrimes = function(n){
    if(n<=1){
        return 0;
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return 0
        }
        else{
            return i
        }
    }
}
console.log(countPrimes(7));
var sortArrayByParity = function(nums){
    let positiveArray = [];
    let negativeArray = [];

    let mergedArray = [];

    
    for(num of nums){
        if(num %2==0){
            positiveArray.push(num);
        }
        else{
            negativeArray.push(num);
        }
    }

    mergedArray = [...positiveArray , ...negativeArray];
    return mergedArray


    

    
    
}



console.log(sortArrayByParity([1,2,3,4]));
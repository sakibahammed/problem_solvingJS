var arraySign = function(nums){
    let multiPly = 1;

    // for(let i=0;i<nums.length;i++){
    //     sum = sum+nums[i]
        
    // }

    // return sum\


    for(let num of nums){
        multiPly = multiPly * num;
    }

    if(multiPly>0){
        return 1
    }
    else if(multiPly<0){
        return -1
    }
    else{
        return 0
    }
}
console.log(arraySign([-1,-2,-3,-4,3,2,1]));
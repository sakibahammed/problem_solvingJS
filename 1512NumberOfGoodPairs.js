var numsIdeticalPairs = function(nums){
    let counter = 0;


    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                counter++;
            }
        }
    }

    return counter;
}


console.log(numsIdeticalPairs([1,2,3,1,1,3]));
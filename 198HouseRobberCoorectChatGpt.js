const rob = function(nums){
    if(nums.length===0){
        return 0;
    }
    if(nums.length ===1){
        return nums[0];
    }

    const bank = new Array(nums.length);
    bank[0] = nums[0];
    bank[1] = Math.max(nums[0],nums[1]);


    for(let i=2;i<nums.length;i++){
        bank[i] = Math.max(bank[i-1],bank[i-2]+nums[i])
    }

    return bank[nums.length-1];
}


console.log(rob([1,2,3,4]));



136
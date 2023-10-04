var isMonotonic = function(nums) {
    let increasing  = true;
    let decreasing  = true;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] > nums[i-1]){
            decreasing = false;
        }

        else if(nums[i] < nums[i-1]){
            increasing = false
        }


        if(!increasing && !decreasing){
            return false;
        }
    }


    return true;
};


console.log(isMonotonic([1,3,2]));
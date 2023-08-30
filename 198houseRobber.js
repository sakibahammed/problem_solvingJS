// house robber 


// here the thing is i cannt rob 2 house nearly lets make money;

var rob = function(nums) {
    
    // for(let i=0;i<nums.length;i=i+2){
        
    // }

    
    let sum = 0

    for(let i=0;i<nums.length;i=i+2){
       sum = sum+nums[i];
    }

    return sum

    
};


console.log(rob([1,2,3,4]));
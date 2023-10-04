var find132pattern = function(nums) {
   for(let i =0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        for ( let k=j + 1 ;k < nums.length;k++){
            if(nums[i]<nums[j]&&nums[j]>nums[k]&&nums[i]<nums[k]){
                return true
            }
            else{
                return  false
            }
        }
    }
   }
};



console.log(find132pattern([1,2,3,4]));
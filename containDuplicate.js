var containsDuplicate = function(nums) {
    let newArray = [];
    for(let num of nums){
        
        if(newArray.includes(num)===true){
            return true;
        }
        newArray.push(num)
    }
    return false;
};
// suppose amaader ekta serial of number er moddhe amader simply ekta number missin ace .. oi number ta khuje ber korar problem ;


// ekhane linear search use kora hoice . 

// Problem 268 - Missing Number


function missingNumber(nums){
  let sum = 0;
  for(let i=0;i<= nums.length;i++){
    sum = sum+i;
  } 
  let sum2 = 0;
  for(let i=0;i<nums.length;i++){
    sum2 = sum2+nums[i];
  }
  return sum-sum2
} 

console.log(missingNumber([1,4,3,0,5]));
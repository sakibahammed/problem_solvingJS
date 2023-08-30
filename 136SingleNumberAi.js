// // var singleNumber = function(nums) {
// //     let value = 0;
// //     for(let num of nums){
// //         value ^=num; 
// //     }

// //     return value;
// // };

// // console.log(singleNumber([1, 2, 2, 3, 3, 3, 4, 4, 1, 5]));


// function findSingleValue(nums) {
//     let result = 0;
    
//     for (const num of nums) {
//       result ^= num;
//     }
    
//     return result;
//   }
  
//   const array = [1, 2, 2, 3, 3, 3, 4, 4, 1, 5];
//   const singleValue = findSingleValue(array);
  
//   console.log(singleValue); // Output: 5
  
var singleNumber = function(nums) {
    let result = 0;
    
    for (const num of nums) {
      result ^= num;
    }
    
    return result;
};


console.log(singleNumber([2,2,1]));



/* 
Documentation : 


We initialize a variable result to 0.
We iterate through each element of the array using a for...of loop.
For each element, we use the XOR (^) bitwise operation to update result. XORing an element with itself or any other element twice will result in 0, effectively canceling out duplicates.
The final result will contain the single value.
In your example array [1, 2, 2, 3, 3, 3, 4, 4, 1, 5], this code will correctly return 5 as the single value.

*/

console.log('documentaion');


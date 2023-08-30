// var singleNumber = function(nums) {
//     let value = 0;
//     for(let num of nums){
//         value ^=num; 
//     }

//     return value;
// };

// console.log(singleNumber([1, 2, 2, 3, 3, 3, 4, 4, 1, 5]));


function findSingleValue(arr) {
    let result = 0;
    
    for (const num of arr) {
      result ^= num;
    }
    
    return result;
  }
  
  const array = [1, 2, 2, 3, 3, 3, 4, 4, 1, 5];
  const singleValue = findSingleValue(array);
  
  console.log(singleValue); // Output: 5
  
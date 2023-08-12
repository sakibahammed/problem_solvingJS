// // var countOperationsToEmptyArray = function(nums) {
// //     let counter = 0;
// //     let newArray = [];
// //   for(let i=0;i<nums.length;i++){
// //     newArray.push(nums[i]);
// //     counter++;
// //     newArray.pop()
// //   }
// //   return counter;
// // };

// // console.log(countOperationsToEmptyArray([3,4,1]));



//  var countOperationsToEmptyArray = function(nums) {   
    
//         let newArray = [];
//         let counter = 0;


//         for(let i=0;i<nums.length;i++){
//             counter++
//             newArray.push(nums[i]);
            
//             newArray.sort();
//             // counter++;
//             newArray.shift()
//             counter++
            

//         }

//         return counter


// }
// console.log(countOperationsToEmptyArray([3,4,-1]));




// var countOperationsToEmptyArray = function(nums) {
//     let counter = 1;
//     let number = nums;
//     number.sort();
//     counter++;
//     let newArray = [];
//     for(let i=0;i<number.length;i++){
//         newArray.push(number);
//         counter++;
//         newArray.shift()
//     }
//     return counter;

// };
// console.log(countOperationsToEmptyArray([3,4,-1]));





//correct code


/**
 * @param {number[]} nums
 * @return {number}
 */
var countOperationsToEmptyArray = function(nums) {
    var map = {};
    var n = nums.length,p=0;
    var ans = n;
    for(let i = 0; i < n; i++){
        map[nums[i]] = i;
    }
    
    nums.sort((a,b) => a-b);
    for(let i = 0; i < n; p = map[nums[i++]]){
        if(map[nums[i]]<p){
            ans += n-i;
        }
    }
    return ans
};
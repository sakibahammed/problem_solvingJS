/* 
    Ceilig and flooring bolte ja bujhaice ; 

        suppose amader ekta array ace.. 

        number = [1 , 2 , 3 , 4 , 6 , 8 , 10 , 18 , 20 , 24 , 27];

        and target number holo 21 ; 


            21 er ceilig  value holo 24
            21 er flooring value holo 20


            jodi ekhane target er data k pawa jai tahole jei index e deta ta ace ota k e return kore dete hobe .


*/





var searchInsert = function(nums, target) {
    let start = 0 ; 
     let end = nums.length - 1; 
     let mid = Math.floor((start+end)/2);; 
 
     while(start < end){
         
 
         if(nums[mid]===target){
             return mid;
         }
         else if(nums[mid] < target){
             start = mid +1;
         }
         else{
             end = mid ;
         }
         mid = Math.floor((start+end)/2);
     }
 
     if(nums[mid]<target){
         return mid+1;
     }
 
     return mid
 };

console.log(searchInsert([10 , 20 , 30 , 40] , 25));
var merge = function(nums1, m  , n){
 
    let number =  [...nums1];
    number.length = m+n;

    return number.length

}


console.log(merge([1,2,3],3,3));
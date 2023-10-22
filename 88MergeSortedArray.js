var merge = function(nums1 , nums2) {
    let array1 = []
    for(let i = 0;i<nums1.length;i++){
        if(nums1[i]>0){
            array1.push(nums1[i]);
        }
    }

    let array2 = []
    for(let i=0;i<nums2.length;i++){
        if(nums2[i]>0){
            array2.push(nums2[i]);
        } 
    }

    let sortedArray = ([...array1,...array2]);
    console.log(sortedArray);
  return (sortedArray.sort());
};


console.log(merge([1,2,3,0,0,0],[2,5,6]));

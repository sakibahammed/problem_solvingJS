var findMedianSortedArrays = function(nums1, nums2) {
  let mergedArray = [...nums1,...nums2].sort() ;

  let median = (mergedArray[0] + mergedArray[mergedArray.length-1]/2)
  return median;
};

console.log(findMedianSortedArrays([1,3],[2]));
var findMedianSortedArrays = function(nums1, nums2) {
  let mergerdArray = [...nums1 , ...nums2].sort();
  let start= 0;
  let end = mergerdArray.length - 1;
  if(mergerdArray.length %2==0){
      let midNumber = Math.floor((start + end)/2)
      let secondMid = midNumber+1;
      let Median = (mergerdArray[midNumber] + mergerdArray[secondMid])/2
      return Median;
  }
  else{
      let MedianOdd = (mergerdArray[0] + mergerdArray[mergerdArray.length-1])/2
      // if((mergerdArray[0]||mergerdArray[mergerdArray.length-1]<0)){
          // MedianOdd = MedianOdd*(-1)
      // }
      return MedianOdd
  }
};
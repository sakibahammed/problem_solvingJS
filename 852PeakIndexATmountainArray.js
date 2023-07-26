var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        // console.log(mid)
        if(arr[mid]> arr[mid-1]&& arr[mid]> arr[mid+1]){
            return mid;
        }
        else if(arr[mid]<arr[mid+1]){
            start = mid+1;
        }
        else{
            end = mid - 1;
        }
    }
};


console.log(peakIndexInMountainArray([0,10,5,2]));
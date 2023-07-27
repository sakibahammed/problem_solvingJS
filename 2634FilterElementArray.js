var filter = function(arr, fn) {
    let numbers = [];
    for(let arrNumber of arr){
        // console.log(arrNumber)
        // let numbers = [];
        // arrNumber.push(numbers);
        numbers.push(arrNumber)
        // console.log(numbers)
        // function fn(arrNumber){
            
        //     let result = arrNumber.filter(arrNumber>10);
        //     return result
        // }
        // fn()
        filter(numbers , fn)

        // console.log(numbers)
        function filter(numbers , fn){
            let result = numbers.filter(numbers=>numbers>fn);
            return result;
        }
    }
    // console.log(numbers)


    // function filter(numbers , fn){
    //     let result = numbers.filter(numbers>fn);
    //     return result;
    // }

};

console.log(filter([1,12,14,2,3]) , 3)










const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

// console.log(result);
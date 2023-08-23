// var addBinary = function(a,b){
//     let binarySearch = BigInt(`0b${a}`) + BigInt(`0b${b}`);
//     return binarySearch.toString(2)
// }


// let sum = BigInt(`0b${11}`) + BigInt(`0b${1}`);
// console.log(sum);


// let num = 4;
// console.log(num.toString(2));

// let name = !true
// console.log(name);




var deleteDuplicates = function(head) {
    let newArray = [];
    for(let i =0;i<head.length;i++){
        if(!newArray.includes(i)){
            newArray.push(i)
        }
    }

    return newArray
};

console.log(deleteDuplicates[1,1,2]);
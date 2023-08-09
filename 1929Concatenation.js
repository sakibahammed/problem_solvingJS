var getConcatenation = function(nums) {
    let newArray=[...nums,...nums];
    return newArray
    
};

console.log(getConcatenation([1,2,1]));
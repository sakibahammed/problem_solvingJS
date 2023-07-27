var isEmpty = function(obj) {
    for(let prop in obj){
        if(obj.hasOwnProperty(prop)){
            return false;
        }
        
    } 
    return true;
};


console.log(isEmpty(
    {
        name:'sakib'
    }
))
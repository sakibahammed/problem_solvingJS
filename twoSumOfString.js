var defangPaddr = function(address){
    return address.replaceAll('.' , '[.]');
}

console.log(defangPaddr(122.342));
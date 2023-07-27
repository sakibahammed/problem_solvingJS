var reverseString = function(s) {
    let string = s;
    for(let i = 0;i<s.length;i++){
        string[i].split(" ").reverse().join(" ");
    }
    return string;
};
console.log(reverseString(["h","e","l","l","o"]));
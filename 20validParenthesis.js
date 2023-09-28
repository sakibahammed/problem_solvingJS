// // var isValid = function(s){
// //     let stack = [];
// //     for(let c of s){
// //         if(c==='(' || c==='{'||c==='['){
// //             stack.push(c);
// //         }
// //         else{
// //             if(!stack.length || (c==')')&& stack[stack.length-1]!=='(' || (c==='}'&&stack[stack.length-1]!=='{')|| (c===']'&& stack[stack.length-1]!=='[')){
// //                 return false
// //                 }

// //                 stack.pop();

// //         }


// //         return !stack.length;
// //     }
// // }

// // copied code


// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//     const stack = [];
    
//     for (let i = 0; i < s.length; i += 1) {
//         const prev = stack[stack.length - 1];
//         const curr = s[i];
        
//         if (prev && 
//             (prev === '(' && curr === ')') ||
//             (prev === '{' && curr === '}') ||
//             (prev === '[' && curr === ']')) {
//             stack.pop();
//             continue;
//         }
        
//         stack.push(curr);
//     }
    
//     return stack.length === 0;
// };
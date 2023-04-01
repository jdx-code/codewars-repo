// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!
// The result should be a string of numbers, separated by comma and space.
// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

const arithmeticProg = (a, d, n) => {
    // Method #1 : Solution found on Codewars
    // let arr = [a];            
    // while(n-1){                 
    
    //     arr.push(a+=d);       
    //     --n;
    // }
    // return arr.join(', ');
    
    let arr = [a];
    while(--n){             
        arr.push(a+=d);
    }
    return arr.join(', ');
}

console.log(arithmeticProg(1, 2, 5));
console.log(arithmeticProg(1, 0, 5));
console.log(arithmeticProg(1, -3, 10));
console.log(arithmeticProg(100, -10, 10)); 
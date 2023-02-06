// Kata # 29 of 7kyu
// Description:

// Write a function that returns the number of occurrences of an element in an array.

// This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).
// Examples

// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences(3) === 1;

Object.defineProperty(Array.prototype, 'numberOfOccurrences',{
    value : function numberOfOccurrences(num){
        // Method #1 : Multiple lines
        // return this.reduce((acc, current) => {
        //     return current === num ? acc + 1 : acc;
        // }, 0);
        // Method #2 : Single line
        return this.reduce((acc, current) => current === num ? acc + 1 : acc, 0);
    }
})

let arr = [0, 1, 2, 2, 3];
console.log(arr.numberOfOccurrences(0));
console.log(arr.numberOfOccurrences(4));
console.log(arr.numberOfOccurrences(2));
console.log(arr.numberOfOccurrences(3));

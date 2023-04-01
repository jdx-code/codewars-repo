// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// Method #1 : Using sort() and indexOf()
// const findingMiddle = (arr) => {
//     let newArr = [...arr];
//     const midElement = newArr.sort((a, b) => +a - +b)[1];
//     return arr.indexOf(midElement);
// }

// Method #2 : Using Math.min(), max() and findIndex()
// const findingMiddle = (arr) => {
//     let minElement = Math.min(...arr);
//     let maxElement = Math.max(...arr);
//     return arr.findIndex(e=>{               
//         if(e>minElement && e<maxElement){
//             return e;
//         }
//     })        
// }

// Method #3 : Using sort() and indexOf on the same array
const findingMiddle = (arr) =>{
    return arr.indexOf([...arr].sort((a,b) => a - b)[1]);
}

console.log(findingMiddle([2, 3, 1]));
console.log(findingMiddle([5, 10, 14]));
console.log(findingMiddle([2.1, 3.2, 1.4]));
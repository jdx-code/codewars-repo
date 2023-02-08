// Kata # 32 of 7kyu
// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
// Examples

// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

const removeTheMinimum = (arr) => {
    // Method #1 : Solution by me
    // let min = Math.min(...arr);    
    // let arr1 = arr.slice(0, arr.indexOf(min));    
    // let arr2 = arr.slice(arr.indexOf(min)+1, arr.length)
        
    // return arr1.concat(arr2);

    // Method #2 : Solution found on Codewars
    let indexOfFirstMinElement = arr.indexOf(Math.min(...arr));
    return [...arr.slice(0, indexOfFirstMinElement), ...arr.slice(indexOfFirstMinElement + 1)];
}

console.log(removeTheMinimum([1,2,3,4,5]));
console.log(removeTheMinimum([5,3,2,1,4]));
console.log(removeTheMinimum([2,2,1,2,1]));
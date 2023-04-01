// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

const findTheOddInt = (arr) => {
    // Method #1 : Solution found on Codewars
    // return arr.reduce((a,b) => a ^ b);

    // Method #2 : Solution found on Codewars
    // let obj = {};
    // arr.forEach(element => {
    //     obj[element] ? obj[element]++ : obj[element] = 1;
    // });

    // // console.log(obj);

    // for(prop in obj){
    //     if(obj[prop] % 2 !== 0) return Number(prop);
    // }

    // Method #3 : Solution found on Codewars
    return arr.find(item => arr.filter(ele => ele == item).length%2)

    // Explanation to the third solution
    // The solution takes advantage of the condition that there will always be one odd number in the array.
    // First the find method is called on the array. What is the find method? The find method returns the first element which meets the condition set in the function.
    // The condition for the find method in this solution is set as the filter method. What is the filter method? The filter method creates an array of ALL elements that meet the condition set in the function.
    // For each element in the array, the find method will take that element as ITEM and then the filter will return an array of all elements in the array that are equal to ITEM.
    // Then the length of the returned filtered array is found. The length refers to the number of times the ITEM is in the array. If the length is odd, length % 2 will return 1 which is a truthy value.
    // The first ITEM that gets this truthy value will be returned by the find method. 
}

console.log(findTheOddInt([7]));
console.log(findTheOddInt([0]));
console.log(findTheOddInt([1,1,2]));
console.log(findTheOddInt([0,1,0,1,0]));
console.log(findTheOddInt([1,2,2,3,3,3,4,3,3,3,2,2,1]));


// For explanations to other solutions visit https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions
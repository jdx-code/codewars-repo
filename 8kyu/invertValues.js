// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invertValues(numArr){
    // Using forEach
    // var newArr = [];
    // numArr.forEach(element => {
    //     newArr.push(-element)
    // });
    // return newArr;

    // Using map 
    return numArr.map(item => -item);
}

console.log(invertValues([1, -2, 3, -4, 5]))
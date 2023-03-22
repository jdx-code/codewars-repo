// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

const filterOutGeese = (arr) => {
    // Method #1 : Solution by me (using filter and includes())
    // let arrWithGeese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // return arr.filter(e => !arrWithGeese.includes(e));

    // Method #2 : Solution on Codewars (using filter and indexOf())
    let arrWithGeese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return arr.filter(e => arrWithGeese.indexOf(e) < 0);

}

console.log(filterOutGeese(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
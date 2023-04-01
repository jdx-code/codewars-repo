// Kata # 22 of 7kyu
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

const highestAndLowest = (str) => {
    // Method #1 : My solution    
    // let arr = str.split(' ');    
    // if(arr.length === 1){
    //     arr.push(str);
    //     return arr.join(' ');
    // } else {
    //     return arr.sort((a,b)=>b-a).filter((item, index)=> {
    //         if(index === 0 || index === arr.length-1)
    //             return item;
    //     }).join(' ');
    // }
    
    // Method #2 : Solution by other users on Codewars   
    // numbers = str.split(' ').map(Number);
    // return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);

    // Method #3 : Solution by other users on Codewars    
    numbers = str.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
    
}

// console.log(highestAndLowest("1 2 3 4 5"));
// console.log(highestAndLowest("1 2 -3 4 5"));
// console.log(highestAndLowest("1 9 3 4 -5"));
console.log(highestAndLowest("42"));
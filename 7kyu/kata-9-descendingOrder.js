// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n){

    // Method #1 : Using callback in sort function
    // return Number(n.toString().split('').map(Number).sort((a,b)=>b-a).join(''));

    // Method #2 : Using reverse in sort function
    return Number(n.toString().split('').map(Number).sort().reverse().join(''));
}

console.log(descendingOrder(123456789));

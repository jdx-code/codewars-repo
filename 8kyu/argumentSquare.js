// Kata # 54 of 8kyu
// Now you have to write a function that takes an argument and returns the square of it.

const argumentSquare = (num) => {
    // Method #1 : Using Math.pow 
    // return Math.pow(num, 2);

    // Method #2 : Using simple method
    return num * num;
}

console.log(argumentSquare(3));
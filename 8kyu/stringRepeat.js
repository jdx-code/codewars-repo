// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function stringRepeat(num, str){

    // Method 1 : Using repeat function
    return str.repeat(num);

    // Method 2 : Using normal for-loop
    // let newStr = "";
    // for(let i = 1; i<=num; i++){
    //     newStr += str;
    // }
    // return newStr;
}

console.log(stringRepeat(5, "Hello"))
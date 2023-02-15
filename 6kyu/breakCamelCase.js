// Kata # 8 of 6kyu
// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const breakCamelCase = (str) => {   
    // Method #1 : Using for loop and array push method
    let newStr = [];
    for(let i=0; i<str.length; i++){
        if(str.charCodeAt(i)<=90){
            newStr.push(' '); 
        }
        newStr.push(str[i]);
    }
    return newStr.join('');
}

console.log(breakCamelCase("camelCasing"));
console.log(breakCamelCase("identifier"));
console.log(breakCamelCase(""));

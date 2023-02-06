// Kata # 30 of 7kyu
// Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."
// These dots at the end also add to the string length.
// So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."
// If the maximum string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.
// e.g. trim("He", 1) should return "H...", because 1 <= 3
// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.
// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

const trimmingString = (str, maxLength) => {
    // Method #1 : Solution from Codewars
    if(str.length <= maxLength){
        return str;
    } 
    const strWithoutDots = str.slice(0, maxLength);
    return `${strWithoutDots.length <=3 ? strWithoutDots : strWithoutDots.slice(0, -3)}...`;
}

console.log(trimmingString("Creating kata is fun", 14));
console.log(trimmingString("He", 1));
console.log(trimmingString("Code Wars is pretty rad", 50));
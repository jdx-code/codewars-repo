// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.

function playingBanjo(name){

    // Using regular expression
    const pattern = /^R/i;
    return pattern.test(name) ? name + " plays banjo"  : name + " does not play banjo";
    
    // Using slice method and ternary condition
    // return (name.slice(0,1) === 'r' || name.slice(0,1) === 'R') ? name + " plays banjo" : name + " does not play banjo";

    // Using slice method and normal if-else condition
    // if(name.slice(0,1) == 'R' || name.slice(0,1) == 'r'){
    //     return name + " plays banjo";
    // } else {
    //     return name + " does not play banjo";
    // }
}

console.log(playingBanjo("ravindra"));
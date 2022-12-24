// Kata # 3 of 8kyu
//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet (name, owner) {    
    return name == owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('Daniel', 'Danielle'));
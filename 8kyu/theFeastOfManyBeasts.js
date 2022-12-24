// Kata # 16 of 8kyu
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish){

    // Method #4 : Using slice function
    return beast.slice(0,1) === dish.slice(0,1) && beast.slice(-1) === dish.slice(-1) ? true : false;

    // Method #3 : Using shift/pop functions
    // return beast.split('').shift() === dish.split('').shift() && beast.split('').pop() === dish.split('').pop() ? true : false;    
    
    // let beastArr = beast.split('');
    // let dishArr = dish.split('');
    // let firstLetterOfBeast = beastArr[0];    
    // let lastLetterOfBeast = beastArr[beastArr.length-1];
    // let firstLetterOfDish = dishArr[0];
    // let lastLetterOfDish = dishArr[dishArr.length-1];

    // Method #2 : Using ternary operator
    // return firstLetterOfBeast === firstLetterOfDish && lastLetterOfBeast === lastLetterOfDish ? true : false;

    // Method #1 : Using simple if-else
    // if(firstLetterOfBeast === firstLetterOfDish && lastLetterOfBeast === lastLetterOfDish){
    //     return true;
    // } else {
    //     return false;
    // }    
}

console.log(feast("chickadee", "chocolate-cake"));
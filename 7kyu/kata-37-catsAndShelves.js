// Description
// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:
//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐       
// │------5-│        
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │     
// BANG!────┘  ├─────► OK! 
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘
// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)
// Task
// Find the minimum number of jumps to go from start to finish
// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)


// Method #1 : Solution found on Codewars
// ``````````````````````````````````````
// const catsAndShelves = (start, finish) => {
//     // let totalSteps = finish - start;
//     // let remainingSteps = totalSteps % 3;
//     // let longSteps = (totalSteps - remainingSteps) / 3;
//     // return longSteps + remainingSteps;
// }

// Method #1 : Solution found on Codewars
// ``````````````````````````````````````
const catsAndShelves = (start, finish, difference = finish - start) => {
    return Math.floor(difference / 3) + (difference % 3);
}

console.log(catsAndShelves(1, 5));
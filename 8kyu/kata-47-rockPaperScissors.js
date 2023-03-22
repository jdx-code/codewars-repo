// Kata # 47 of 8kyu
// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rockPaperScissors = (p1, p2) => {  

    // Method #1 : Solution by me
    // if(p1 === p2)  {
    //     return 'Draw!';
    // } else if(p1 === 'rock'){
    //     if(p2 === 'scissors'){
    //         return 'Player 1 won!';
    //     } else {
    //         return 'Player 2 won!';
    //     }
    // } else if(p1 === 'scissors'){
    //     if(p2 === 'paper'){
    //         return 'Player 1 won!';
    //     } else {
    //         return 'Player 2 won!';
    //     }
    // } else if(p1 === 'paper')     {
    //     if(p2 === 'rock'){
    //         return 'Player 1 won!';
    //     } else {
    //         return 'Player 2 won!';
    //     }
    // }

    // Method #2 : Solution found on Codewars
    if(p1 === p2){
        return 'Draw!'
    } 
    if(p1 === 'rock' && p2 === 'scissors'){
        return 'Player 1 won!';
    } else if(p1 === 'paper' && p2 === 'rock'){
        return 'Player 1 won!';
    } else if(p1 === 'scissors' && p2 === 'paper'){
        return 'Player 1 won!';
    } else {
        return 'Player 2 won!';
    }
}

console.log(rockPaperScissors('rock', 'scissors'));
console.log(rockPaperScissors('scissors', 'rock'));
console.log(rockPaperScissors('scissors', 'paper'));
console.log(rockPaperScissors('paper', 'rock'));
console.log(rockPaperScissors('rock', 'rock'));
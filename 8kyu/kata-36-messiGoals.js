// Kata # 36 of 8kyu
// Messi goals function
// Messi is a soccer player with goals in three leagues:
//     LaLiga
//     Copa del Rey
//     Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17

// Method #1: My solution
// const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => {
//     return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// }

// Method #2: Solutions by other users on Codewars
const goals = (...arr) => {
    return arr.reduce((acc, item) => acc + item, 0);
}

console.log(goals(5, 10, 2));


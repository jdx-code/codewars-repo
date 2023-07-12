// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

const highestScore = (x) => {
    let alphas = {
        'a' : 1, 'b' : 2, 'c' : 3, 'd' : 4, 'e' : 5,
        'f' : 6, 'g' : 7, 'h' : 8, 'i' : 9, 'j' : 10,
        'k' : 11, 'l' : 12, 'm' : 13, 'n' : 14, 'o' : 15,
        'p' : 16, 'q' : 17, 'r' : 18, 's' : 19, 't' : 20,
        'u' : 21, 'v' : 22, 'w' : 23, 'x' : 24, 'y' : 25, 'z' : 26
    }
    let splitX = x.split(' ')
    let nums = splitX
        .map((e,i) => e.split('')
        .map(e => alphas[e])
        .reduce((a, e) => a + e, 0))        
    
    let highest = nums[0]
    nums.forEach(element => {
        if(element > highest){
            highest = element
        }
    });

    return splitX[nums.indexOf(highest)]
        
}

console.log(highestScore('man i need a taxi up to ubud'))


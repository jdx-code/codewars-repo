// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:
// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

const buildTower = (x) => {

    let newArr = []
    for(let i=0; i<x; i++){
        newArr.push(i+(i+1))
    }
    
    return newArr.map((e, i) => ' '.repeat((newArr.length-1)-i) + '*'.repeat(e) + ' '.repeat((newArr.length-1)-i))
}

console.log(buildTower(3))
console.log(buildTower(6))
// Kata # 31 of 8kyu
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

const booleanToYesNo = (bool) => {
    return bool ? 'Yes' : 'No';
}

console.log(booleanToYesNo(false));
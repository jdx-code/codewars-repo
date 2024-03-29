// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

const expandedForm = (num) => {
    // Method #1 : Solution from Codewars
    return num.toString()
                .split('')
                .reverse()
                .map((item, index) => item * Math.pow(10, index))
                .filter(num => num > 0)
                .reverse()
                .join(' + ');
}

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));       
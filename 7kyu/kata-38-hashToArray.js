// Description:
// Convert a hash into an array. Nothing more, Nothing less.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.
// Good Luck!

const hashToArray = (obj) => {
    return Object.entries(obj).sort();
}

console.log(hashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}));
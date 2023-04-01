// Complete the function that takes a string of English-language text and returns the number of consonants in the string.
// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

const countConsonants = (str) => {    
    // Solution unlocked  
    // Useful link : https://bobbyhadz.com/blog/javascript-cannot-read-property-length-of-null
    
    return (str.match(/[bcdfghjklmnpqrstvwxyz]/ig) || [] ).length;    
}

// console.log(countConsonants(''));
// console.log(countConsonants('aaaaa'));
// console.log(countConsonants('XaeiouX'));
// console.log(countConsonants('Bbbbb'));
// console.log(countConsonants('helLo world'));
// console.log(countConsonants('h^$&^#$&^elLo world'));
// console.log(countConsonants('0123456789'));
// console.log(countConsonants('012345_Cb'));
console.log(countConsonants('uooeeeiioiioaeuiaeiaaaeouuoeueauuuufrkfkstjndklzmhtfg'));


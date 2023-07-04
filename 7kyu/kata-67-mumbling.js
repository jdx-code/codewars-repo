// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = (s) => {
    return s.split('').map((e, i) => e.toUpperCase() + e.repeat(i).toLowerCase()).join('-')
}

console.log(accum('abcd'))
console.log(accum('RqaEzty'))
console.log(accum('cwAt'))
console.log(accum('ZpglnRxqenU'))
console.log(accum('NyffsGeyylB'))
console.log(accum('MjtkuBovqrU'))
console.log(accum('EvidjUnokmM'))
console.log(accum('HbideVbxncC'))
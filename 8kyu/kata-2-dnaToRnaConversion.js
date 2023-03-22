// Kata # 2 of 8kyu
// create a function which returns an RNA sequence from the given DNA sequence

function DNAtoRNA(dna) {    
    return dna.replace(/T/g, "U");
}

console.log(DNAtoRNA("UTUT"));
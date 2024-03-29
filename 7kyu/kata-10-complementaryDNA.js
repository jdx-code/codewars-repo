//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){    
    // Method #1
    // let chars = {'A':'T', 'T':'A', 'C':'G', 'G':'C'};    
    // return dna.replace(/[TACG]/g, m => chars[m]);    

    //Method #2
    // return dna.replace(/[TACG]/g, m => { 
    //     return {'A':'T', 'T':'A', 'C':'G', 'G':'C'}[m]; 
    // });

    //Method #3 : Solution found on Codewars
    return dna.replace(/./g, function(e){
        return DNAStrand.pairs[e];
    })       
}

DNAStrand.pairs = {
    'A':'T', 
    'T':'A', 
    'C':'G', 
    'G':'C',
}
console.log(DNAStrand('AATT'));
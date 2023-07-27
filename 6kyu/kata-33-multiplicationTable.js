// Your task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
// [[1,2,3],[2,4,6],[3,6,9]]

const multiplicationTable = (n) => {
    
    var result = []
    for(var i=0; i<n; i++){
        result[i] = []
        for(var j=0; j<n; j++){
            result[i][j] = (i+1) * (j+1)
        }
    }
    return result
}

console.log(multiplicationTable(3))



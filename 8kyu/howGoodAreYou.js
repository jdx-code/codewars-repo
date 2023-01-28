// Kata # 39 of 8kyu
// Description:
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

const howGoodAreYou = (classPoints, yourPoints) => {
    // Method #1 : Solution by me
    classPoints.push(yourPoints);    
    let totalStudents = classPoints.length;
    let classPointsTotal = classPoints.reduce((acc, item) => acc + item, 0);
    let averagePoints = classPointsTotal/totalStudents;
    return yourPoints > averagePoints;
}

console.log(howGoodAreYou([100, 40, 34, 57, 29, 72, 57, 88], 75));

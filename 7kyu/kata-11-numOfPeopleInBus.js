// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){    

    // Method #3 : Using reduce method
    return busStops.reduce((peopleRemain, [peopleIn, peopleOut]) => peopleRemain + peopleIn - peopleOut , 0);

    // Method #2 : Using one for loop
    // let totalBusIn = 0;
    // let totalBusOut = 0;    
    // for(let i=0; i<busStops.length; i++){
    //     totalBusIn += busStops[i][0];
    //     totalBusOut += busStops[i][1];
    // }
    // return totalBusIn - totalBusOut;

    // Method #1 : Using two for loops
    // let totalBusIn = 0;
    // let totalBusOut = 0;    
    // for(let i=0; i<busStops.length; i++){        
    //     totalBusIn += Number(busStops[i][0]);        
    // }

    // for(let j=0; j<busStops.length; j++){
    //     totalBusOut += Number(busStops[j][1]);
    // }
    // return totalBusIn - totalBusOut;    
}

console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
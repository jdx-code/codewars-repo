// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].


const deleteNth = (arr, n) => {
    // Create a new array which will store the final output
    const newArr = [];      

    // Create an empty object, which will have key: value pairs where key will be the elements of the given array and their respective values will be the number of times those elements have appeared.
    const numObj = {};

    // Loop through each element of the given array
    for(let num of arr){
        
        // Convert the current array element from number to string to match the object key notation
        const numStr = num.toString();  

        // Check to see if this current element contains as key in the numObj
        if(numStr in numObj) {
            // if the value of current key is less than n then increment its value by 1 and push the current element to final output array -- newArray.
            if(numObj[numStr] < n){     
                numObj[numStr] += 1;
                newArr.push(num);
            } 
            // else part means the current element is not a part of the numObj as key. So if that's the case it's value will be 1 and it will be pushed to the newArray.
        } else {    
            numObj[numStr] = 1;
            newArr.push(num);
        }
    }
    // Finally return the newArray containing the desired output.
    return newArr;
}

console.log(deleteNth([20,37,20,21], 1));
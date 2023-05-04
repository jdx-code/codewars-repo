// You need to hire a catering company out of three for lunch in a birthday party. The first caterer offers only a basic buffet which costs $15 per person. The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person. The third one gives a 20% discount if the number of persons to be served is greater than 60. You want to spend the maximum that fits into the budget.
// The function takes two arguments denoting the budget in $ and the number of people. Return 1, 2 or 3 for the three caterers as per the above criteria. Return -1 if there are no people or the budget is lower than the cost of buffets from the first caterer.
// Number of orders is always equal to number of people.
// For example,
// budget, people => (200, 9) will return 2.
// budget, people => (300, 9) will return 3 and so on.

const findingCaterer = (budget, people) => {
    
    // if there are no people or the budget is lower than the cost of buffets from the first caterer.
    if(people < 1 || budget < 15){
        return -1
    }

    let basicBuffet = 15 * people
    let economyBuffet = 20 * people
    let premiumBuffet = 30 * people

    if(people > 60){
        let discount = premiumBuffet * 0.2
        let premiumBuffetAfterDiscount = premiumBuffet - discount
        premiumBuffet = premiumBuffetAfterDiscount
    }

    let catererArray = [basicBuffet, economyBuffet, premiumBuffet]
     
    let catererWithinBudget = catererArray.filter(c => c <= budget)

    if(catererWithinBudget.length < 1){
        return -1
    }

    return catererArray.indexOf(Math.max(...catererWithinBudget)) + 1;
    
}

console.log(findingCaterer(150, 10))
console.log(findingCaterer(1500, 60))
console.log(findingCaterer(1500, 61))
console.log(findingCaterer(100, 0))
console.log(findingCaterer(200, 5))
console.log(findingCaterer(1000, 45))
console.log(findingCaterer(940, 70))
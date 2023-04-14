// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Your function also receives a third argument, a string, with the name of the fighter that attacks first.
// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }    // converts names to strings, checks edge cases like jd123 and converts them to string
}

const declareWinner = (fighter1, fighter2, firstAttacker) => {

    let numberOfHitsTakenByFighter1 = Math.ceil(fighter2.health / fighter1.damagePerAttack);  //    Ex: 5/2 = 2.5 = 3   
                                                                                              //    Ex: 5/2 = 2.5 = 3

    let numberOfHitsTakenByFighter2 = Math.ceil(fighter1.health / fighter2.damagePerAttack);  //    Ex: 10/4 = 2.5 = 3  
                                                                                              //    Ex: 20/3 = 6.6 = 7  
    
    if(numberOfHitsTakenByFighter1 < numberOfHitsTakenByFighter2){
        return fighter1.name + ' wins (from if block)';
    } else if(numberOfHitsTakenByFighter2 < numberOfHitsTakenByFighter1){
        return fighter2.name + ' wins (from else if block)';
    } else {
        return firstAttacker + ' wins (from else block)';
    }
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"));     // should say 'Lew wins'
console.log(declareWinner(new Fighter("Lew", 20, 2), new Fighter("Harry", 5, 3), "Lew"));     // should say 'Lew wins'
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 15, 3), "Lew"));     // should say 'Harry wins'

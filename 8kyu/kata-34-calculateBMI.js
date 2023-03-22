// Kata # 34 of 8kyu
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"


const bmiFunction = (weight, height) => {
    const bmi = weight/(height*height);    

    // Method #1 : Using if-else
    // if(bmi<=18.5){
    //     return "Underweight";
    // } else if(bmi<=25.0){
    //     return "Normal"
    // } else if(bmi<=30.0){
    //     return "Overweight";
    // } else {
    //     return "Obese";
    // }

    // Method #2 : Using ternary operator
    return bmi <= 18.5 ? "Underweight" :
            bmi <= 25.0 ? "Normal" :
            bmi <= 30.0 ? "Overweight" : "Obese";
}

console.log(bmiFunction(80, 1.80));
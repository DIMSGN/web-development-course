const rl = require("../readlineInterface");

function bmiCalculator() {
    rl.question("Enter your weight in kg : " , (weight) => {
        rl.question("Enter your height in m : " , (height) =>{
            const bmi = weight / (height * height);
            console.log("Your BMI is " + bmi);
        rl.close();
        })
    })
}
module.exports = bmiCalculator;
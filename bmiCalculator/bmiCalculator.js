const rl = require("../readlineInterface");

function bmiCalculator() {
    rl.question("Enter your weight in kg: ", (weight) => {
        rl.question("Enter your height in m: ", (height) => {
            const weightNum = parseFloat(weight);
            const heightNum = parseFloat(height);
            const bmi = weightNum / (heightNum * heightNum);
            if (bmi < 18.5) {
                console.log("Your BMI is " + bmi.toFixed(2) + " and you are underweight");
            } else if (bmi >= 18.5 && bmi < 24.9) {
                console.log("Your BMI is " + bmi.toFixed(2) + " and you are normal weight");
            } else if (bmi >= 25 && bmi < 29.9) {
                console.log("Your BMI is " + bmi.toFixed(2) + " and you are overweight");
            } else {
                console.log("Your BMI is " + bmi.toFixed(2) + " and you are obese");
            }
            rl.question('Press Enter to run again or Ctrl+C to exit\n', () => {
                bmiCalculator();
            });
        });
    });
}

module.exports = bmiCalculator;
const rl = require('../readlineInterface');
const addNumbers = require ('./sum');

rl.question("Enter a number: ", (num1) => {
        rl.question("Add another number : ", (num2) => {
            const result = addNumbers(parseFloat(num1), parseFloat(num2));
            console.log(`The sum of the two numbers is : ${result}`);
            rl.close();
        });
    });    

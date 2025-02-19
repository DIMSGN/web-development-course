const rl = require('../readlineInterface');
const addNumbers = require ('./sum');

function sumFunction () {
    rl.question("Enter a number: ", (num) => {
        rl.question("Add another number : ", (num2) => {
            const result = addNumbers(parseFloat(num), parseFloat(num2));
            console.log(`The sum of the two numbers is : ${result}`);
            rl.close();
        });
    });    
}
const whoIsPaying = require('./whosPaying');
const rl = require('../readlineInterface');

rl.question("Enter the names of the people who are going to buy lunch today: ", (names) => {
    const namesArray = names.split(", ");
    console.log(whoIsPaying(namesArray));
    rl.close();
});
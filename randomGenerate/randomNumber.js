const rl = require("../readlineInterface");

function randomNumber() {
    console.log("Your random number from 1 - 100 is :");
    var n = Math.random() * 100;
    n = Math.floor(n) + 1;
    console.log(n);
    rl.question('Press Enter to run again or Ctrl+C to exit\n', () => {
        randomNumber();
    });
    
}
module.exports = randomNumber;
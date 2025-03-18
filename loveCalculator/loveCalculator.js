const rl = require("../readlineInterface");

function loveCalculator() { 
    console.log("Welcome to the Love Calculator!");
    rl.question("What is your name? ", (name1) => {
        rl.question("What is your crush's name? ", (name2) => {
            let loveScore;
            if (name1.toUpperCase() === "STATHIS" && name2.toUpperCase() === "KOULA") {
                loveScore = Math.floor(Math.random() * 10) + 1;
                console.log("Your love score is " + loveScore + "%");
                console.log("AX KOULA POLY KWLOPAIDO O KYRIAKOS\n");
            } else {
                loveScore = Math.random() * 100;
                loveScore = Math.floor(loveScore) + 1;
                console.log("Your love score is " + loveScore + "%");
            }
            rl.question('Press Enter to run again or Ctrl+C to exit\n', () => {
                loveCalculator();
            });
        });
    });
}

module.exports = loveCalculator;
const rl = require("../readlineInterface");

function leapYear() {
    rl.question("Enter a year: ", (year) => {
        if (year % 4 === 0) {
            if (year % 100 !== 0) {
                console.log(year + " is a leap year\n");
            } else {
                if (year % 400 === 0) {
                    console.log(year + " is a leap year\n");
                } else {
                    console.log(year + " is not a leap year\n");
                }
            }
        } else {
            console.log(year + " is not a leap year\n");
        }
        rl.question('Press Enter to run again or Ctrl+C to exit\n', () => {
            leapYear();
        });
    });
}

module.exports = leapYear;
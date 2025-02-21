const rl = require('../readlineInterface');

function promptAge() {
    rl.question("Enter your age: ", (age) => {
        lifeInWeeks(parseInt(age)); // Convert age to an integer and call lifeInWeeks
        rl.close();
    });
}

function lifeInWeeks(age) {
    var yearDays = 365;
    var yearWeeks = 52;
    var yearMonths = 12;
    var yearsLeft = 90 - age;
    console.log("You have " + yearsLeft * yearDays + " days, " + yearsLeft * yearWeeks + " weeks, and " + yearsLeft * yearMonths + " months left.");
}

module.exports = promptAge;
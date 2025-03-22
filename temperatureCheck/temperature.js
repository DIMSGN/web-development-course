const rl = require('../readlineInterface');

function temperature() {
    rl.question("What is the temperature? ", (temp) => {
        temp = temp.trim(); // Remove extra spaces

        let negative = ""; // Store the minus sign if needed

        // Check if input starts with any minus sign
        if (temp.startsWith("-") || temp.startsWith("–") || temp.startsWith("—")) {
            negative = "-"; // Store the standard minus sign
            temp = temp.slice(1); // Remove the minus sign from input
        }

        // Convert to number
        let temperature = parseFloat(negative + temp); // Apply the minus sign if needed

        if (isNaN(temperature)) { 
            console.log("Invalid input! Please enter a number.");
        } else if (temperature >= 30) {
            console.log("It's a hot day!");
        } else if (temperature >= 20) {
            console.log("It's a nice day!");
        } else if (temperature >= 0) {
            console.log("It's a cold day!");
        } else { 
            console.log("It's freezing outside!");
        }

        rl.close();  
    });
}

module.exports = temperature;
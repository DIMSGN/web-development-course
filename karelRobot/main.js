const rl = require('../readlineInterface');
const Karel = require('./karel');
const printDots = require('./printDots');

const karel = new Karel();
const milkPrice = 1.5;

console.log("🤖 Welcome to Karel's Adventure!");
console.log("Commands: 'up', 'down', 'left', 'right' to move.");
printDots(karel); // Show the map

function askUser() {
    rl.question("Where do you want to go? ", (input) => {
        const [direction, steps] = input.split(" ");
        const numSteps = parseInt(steps, 10) || 1; // Default to 1 step if no number is provided

        if (["up", "down", "left", "right"].includes(direction)) {
            karel.move(direction, numSteps);
            printDots(karel);
            if (karel.isAtShop()) {
                console.log("🏪 Welcome to the milk store. The price of milk is 1.5 euros per bottle.");
                askForBottles();
                return;
            }
        } else if (input === "milk") {
            if (karel.isAtShop()) {
                console.log("🏪 Welcome to the milk store. The price of milk is 1.5 euros per bottle.");
                askForBottles();
                return;
            } else {
                console.log("🚫 You must reach the shop first!");
            }
        } else {
            console.log("❌ Invalid command. Try 'up', 'down', 'left', 'right' or 'milk'.");
        }

        askUser();
    });
}

function askForBottles() {
    rl.question("How many bottles of milk do you want to buy? ", (input) => {
        const bottles = parseInt(input, 10);
        if (isNaN(bottles) || bottles <= 0) {
            console.log("❌ Invalid number of bottles. Please enter a positive number.");
            askForBottles();
        } else {
            const totalCost = bottles * milkPrice;
            console.log(`The total cost is ${totalCost.toFixed(2)} euros.`);
            askForPayment(totalCost);
        }
    });
}

function askForPayment(totalCost) {
    rl.question("Please enter the amount you are giving: ", (input) => {
        const amount = parseFloat(input);
        if (isNaN(amount) || amount <= 0) {
            console.log("❌ Invalid amount. Please enter a positive number.");
            askForPayment(totalCost);
        } else {
            const change = amount - totalCost;
            if (change >= 0) {
                console.log(`Thank you! Here is your change: ${change.toFixed(2)} euros.`);
            } else {
                console.log(`You need ${Math.abs(change).toFixed(2)} more euros.`);
            }
            askUser();
        }
    });
}

askUser();
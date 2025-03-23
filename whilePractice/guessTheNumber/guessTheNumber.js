const rl = require("../../readlineInterface");

// 1. Generate a random number between 1 and 100.
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("I have picked a number between 1 and 100. Try to guess it!");

// 2. Start a loop that keeps running until the user guesses correctly.
function askForGuess() {
    rl.question("Enter a number between 1 and 100: ", guess => {
        // Convert the guess to a number
        guess = parseInt(guess, 10); // , 10 is the radix parameter to prevent octal parsing

        // 3. Provide feedback based on the user's guess.
        if (isNaN(guess)) {
            console.log("Please enter a valid number."); // If the guess is not a number, ask again.
            askForGuess();
        } else if (guess < randomNumber) {
            console.log("Too low!"); // If the guess is too low, print "Too low!" and ask again.
            askForGuess();
        } else if (guess > randomNumber) {
            console.log("Too high!"); // If the guess is too high, print "Too high!" and ask again.
            askForGuess();
        } else {
            console.log("Correct!"); // If the guess is correct, print "Correct!" and end the loop.
            rl.close();
        }
    });
}
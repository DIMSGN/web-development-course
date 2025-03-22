const rl = require ("../../readlineInterface");
//1. Generate a random number between 1 and 100.
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
//2. Start a loop that keeps running until the user guesses correctly.
rl.question("Enter a number between 1 and 100: ", guess => {//   a. Ask the user to enter a guess.
    if (isNaN(guess)) {
        console.log("Please enter a valid number.");//   b. If the guess is not a number, ask again.
    } else if (guess < randomNumber) {
        console.log("Too low!");
    } else if (guess > randomNumber) {
        console.log("Too high!");
    } else {
        console.log("Correct!");
        rl.close();
    });
}
   
//   c. If the guess is too high, print "Too high!" and ask again.
//   d. If the guess is too low, print "Too low!" and ask again.
//   e. If the guess is correct, print "Correct!" and stop the loop.
//

module.exports = randomNumber; // Export the function for use in other files
// Import the readline module to enable reading input from the command line
const readline = require("readline");

// Create an interface for reading input and writing output
const rl = readline.createInterface({
    input: process.stdin, // Read input from the standard input (keyboard)
    output: process.stdout // Write output to the standard output (console)
});

// Define the upperCaseName function that takes a callback function as an argument
function upperCaseName(callback) {
    // Prompt the user with a question and wait for their response
    rl.question("What's your name? ", (name) => {
        // The user's input (name) is passed as an argument to this callback function

        // Extract the first character of the name
        const firstCharacter = name.slice(0, 1);

        // Convert the first character to uppercase
        const upperCaseFirstCharacter = firstCharacter.toUpperCase();

        // Extract the rest of the name starting from the second character
        const restOfName = name.slice(1);

        // Concatenate the uppercase first character with the rest of the name
        const capitalizedName = upperCaseFirstCharacter + restOfName;

        // Greet the user with the capitalized name
        // The console.log() function prints the greeting message to the console
        console.log(`Hello, ${capitalizedName}!`);

        // Close the readline interface to stop reading input from the command line
        // This is important to prevent the program from waiting for more input
        rl.close();

        // Call the callback function if it is provided
        // This allows additional actions to be performed after the greeting
        if (callback) {
            callback();
        }
    });
}

// Export the upperCaseName function so it can be used in other files
// This makes the function available for import in other modules
module.exports = { upperCaseName };
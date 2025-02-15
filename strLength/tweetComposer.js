// 1️⃣ Import the readline module
const readline = require('readline'); // const → This is a constant variable (it cannot be changed). readline → The variable name we choose. require('readline') → This imports the readline module, which allows us to read user input from the terminal (command line).

// 2️⃣ Create a function called composeTweet
function composeTweet() { // function → Defines a function (a reusable block of code). composeTweet → The name of the function. We can call this function later to run our tweet program. { → This curly brace opens the function body (everything inside this function runs when we call it).

    // 3️⃣ Create the readline interface
    const rl = readline.createInterface({ // const rl → Creates a constant variable named rl (short for "readline"). readline.createInterface({...}) → This creates a new interface that allows us to get user input and display output.
        input: process.stdin, // input: process.stdin → Tells JavaScript to read input from the keyboard (standard input).
        output: process.stdout // output: process.stdout → Tells JavaScript to display output on the screen (standard output).
    }); // }); → Closes the readline.createInterface({...}) function.

    // 4️⃣ Ask the user to type a tweet
    rl.question("Compose your tweet: ", (tweet) => { // rl.question(...) → Asks the user a question and waits for them to type something. "Compose your tweet: " → The message shown to the user. (tweet) => { → This is an arrow function that runs after the user types a response. tweet → This is the text the user types.

        // 5️⃣ Count the number of characters in the tweet
        const tweetCount = tweet.length; // const tweetCount → Creates a constant variable named tweetCount. tweet.length → Counts the number of characters in tweet.

        // 6️⃣ Display the result to the user
        console.log(`You have written ${tweetCount} characters, you have ${140 - tweetCount} characters remaining.`); // console.log(...) → Prints a message to the screen. Template Literals (Backticks ``) → Allow us to embed variables inside strings using ${}. "You have written ${tweetCount} characters" → Displays how many characters the user wrote. "you have ${140 - tweetCount} characters remaining." → Calculates and displays how many characters are left.

        // 7️⃣ Close the readline interface
        rl.close(); // rl.close(); → Closes the input interface so the program doesn't keep running. Without this, the program would wait for more input forever!
    });
}

// Export the composeTweet function
module.exports = { composeTweet }; // module.exports = { composeTweet }; → Exports the composeTweet function so it can be used in other files.
const readline = require('readline');

function composeTweet() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Compose your tweet: ", (tweet) => {
        const tweetCount = tweet.length;
        console.log(`You have written ${tweetCount} characters, you have ${140 - tweetCount} characters remaining.`);
        rl.close();
    });
}
module.exports = { composeTweet };
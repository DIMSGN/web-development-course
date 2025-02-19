const rl = require('../readlineInterface');
function composeTweet() { 
    rl.question("Compose your tweet: ", (tweet) => { 
        const firstCharacter = tweet.slice(0, 1);
        const upperCaseFirstCharacter = firstCharacter.toUpperCase();
        const restOfTweet = tweet.slice(1);
        const capitalizedTweet = upperCaseFirstCharacter + restOfTweet;
        const tweetCount = capitalizedTweet.length;
        console.log(`You have written ${tweetCount} characters, you have ${140 - tweetCount} characters remaining.`); 
        rl.close();
    });
}
module.exports = { composeTweet };
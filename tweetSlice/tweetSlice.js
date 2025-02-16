const readline = require("readline");
function composeTweet() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Compose your tweet: ", (tweet) => {
    const slicedTweet = tweet.slice(0, 140);
    console.log(`Your tweet: "${slicedTweet}"`);

    rl.close();
  });
}
module.exports = { composeTweet };

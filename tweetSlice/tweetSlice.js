const rl = require('../readlineInterface');
function composeTweet() {

  rl.question("Compose your tweet: ", (tweet) => {
    const slicedTweet = tweet.slice(0, 140);
    console.log(`Your tweet: "${slicedTweet}"`);
  rl.close();
  });
}
module.exports = { composeTweet };

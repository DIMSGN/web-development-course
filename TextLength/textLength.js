const rl = require ('../readlineInterface');

function LengthOfText() {
rl.question("Write your text : ", (text) => {
	console.log(text.length);
	rl.close();
});
};
module.exports = LengthOfText;
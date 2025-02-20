const rl = require ('../readlineInterface');

function EvenOrOdd() {
    rl.question("Enter a number : ", (num) => {
	console.log(`${num} is ${ num % 2 === 0 ? "Even" : "Odd"}`);
	rl.close();

});
}
module.exports = EvenOrOdd;
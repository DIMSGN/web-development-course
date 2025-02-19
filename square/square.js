const rl = require('../readlineInterface');

function square(num){
    return num*num;
}

function promptSquare() {
rl.question("Enter a number to square: ", (num) =>{
	const result = square(parseFloat(num));
	console.log(`The squarte of ${num} is: ${result}`);
	rl.close();
});
}
module.exports =  promptSquare ;
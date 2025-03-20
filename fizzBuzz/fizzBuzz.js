const rl = require('../readlineInterface');
var output = [];
var count = 1;
function fizzBuzz() {
output.push(count);
count++;
console.log(output);
rl.question('Press Enter to run again or Ctrl+C to exit\n', () => {
    fizzBuzz(); 
});

}
module.exports = fizzBuzz;
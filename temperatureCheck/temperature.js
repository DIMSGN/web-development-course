const rl = require('../readlineInterface');
function temperature() {
rl.question("What is the temperature? " , (temp) =>{
    const temperature = parseFloat(temp);
if (temperature >= 30) 
    {console.log ("It's a hot day!");}
else if (temperature >= 20 && temperature <= 29) 
    {console.log ("It's a nice day!");}
else if (temperature >= 10 && temperature <= 19)
    {console.log ("It's a nice cold day!");}
else if (temperature < 10)
    {console.log ("It's a cold day!");}
else if (temperature < 0)
    {console.log ("It's freezing!");}
else
    {console.log ("Please enter a valid temperature!");}
    rl.close();  

});
}
module.exports = temperature;
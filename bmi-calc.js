/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your weight in kilograms: ", (weightin) => {
	rl.question("Enter your height in meters: ", (heightin) => {
		console.log("Your weight is: " + weightin + " kg.");
		console.log("Your height is: " + heightin + " m.");
		var bmi = getBMI(weightin, heightin).toFixed(1);
		console.log("Your BMI is: " + bmi);
		rl.close();
	});
});

function getBMI(weight, height) {
	return weight/Math.pow(height, 2);
}

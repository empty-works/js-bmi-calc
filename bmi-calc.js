/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

var weight;
var height;
var bmi;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your weight: ", (weight) => {
	console.log("Your weight is: " + weight + " kg.");
});

rl.question("Enter your height: ", (height) => {
	console.log("Your height is: " + height + " m.");
	rl.close();
});

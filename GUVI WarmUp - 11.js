/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	return num1 * 60 * num2;
	///60 seconds
}
let result = frames(10, 1);
console.log(result);
/*
Lines For TestCase
frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/
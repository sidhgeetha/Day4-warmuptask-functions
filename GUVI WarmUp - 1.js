/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(num) {
	///Your code Starts here 
	//if(Number.isInteger(num))
	if (num >= 0) {
		return -num;
	} else if (num < 0) {
		
		return -1;
	}
	
	/// Your code Ends here
}
let result = getOpposite(5)
console.log(result);
/*
Lines For TestCase
addFive(5)
addFive(0)
addFive(-5)
*/
/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	let disX = x2 - x1;
	let disY = y2 - y1;
	let distance = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2));
	let ans = Math.floor(distance);
	return ans;
}
let result = getDistance(1, 2, 4, 6);
console.log(result);




///Your code Ends here

/*
Lines For TestCase

getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/
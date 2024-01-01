/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	///Your code Starts here 
	
	// 	let x = firstName + " " + lastName;
	// 	return x;
	
	if (firstName === undefined || lastName === undefined) {
		return firstName;
	} else {
		let result = (firstName + " " + lastName).trim();
		return result;
	}
	
	///Your code Ends here
}
let result = getFullName("GUVI", "GEEK");
console.log(result);
/*
Lines For TestCase

getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName( "GEEK");
getFullName("", ""); 
*/
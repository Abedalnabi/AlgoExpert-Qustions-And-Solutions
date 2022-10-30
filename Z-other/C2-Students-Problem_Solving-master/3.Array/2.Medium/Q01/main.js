console.log(arrowTitle);

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array of strings stored in 
strArr which will contain 2 elements: the first element will represent a list of 
comma-separated numbers sorted in ascending order, the second element will represent a 
second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated 
string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, 
return the string false.
*/

function findIntersection(strArr) {

	// use Set 
	// then for loop on second one
	let arrN1 = strArr[0].split(', ');
	let arrN2 = strArr[1].split(', ');
	let matchArr = [];

	arrN2.forEach(function (e) {
		if (arrN1.includes(e)) {
			matchArr.push(e);
		}
	});

	return matchArr.length ? matchArr.join(',') : false;
}
/*
Examples:
findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
findIntersection(['2, 5, 7, 14', '1, 25, 4, 13, 15']); // => False
findIntersection(['', '1, 2, 4, 13, 15']); // => False


*/

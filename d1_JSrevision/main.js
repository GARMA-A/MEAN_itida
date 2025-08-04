const arr = [1, 2, 1, 4, 5, 1, 2, 3];


//Write a function that removes duplicate values from an array. 
function removeDuplicates(arr) {
	//arr.filter((item, index, arr) => arr.indexOf(item) === index);
	return [...new Set(arr)];
}

// Return a new array that is the reverse of the input.
function reverseArray(arr) {
	return arr.slice().reverse();
}


// Write a function that takes an array of names and returns a new array with only names that start with "A", 
// capitalized.
function filterNamesStartingWithA(names) { // array 
	return names.filter(item => item.startsWith('A')) // new array
		.map(name => name.charAt(0).toUpperCase() + name.slice(1));
}

//Given an array of grades, calculate the average and return a letter grade based on the score.
function getLetterGrade(grades) {
	const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
	return average >= 90 ? 'A' :
		average >= 80 ? 'B' :
			average >= 70 ? 'C' :
				average >= 60 ? 'D' : 'F';
}


//Create a function that separates numbers into even and odd arrays and returns an object.
function separateEvenOdd(numbers) {
	const even = [];
	const odd = [];
	numbers.forEach(num => {
		if (num % 2 === 0) {
			even.push(num);
		} else {
			odd.push(num);
		}
	});
	return { even, odd };
}

//Create a function that checks if a password is valid:
//at least 8 characters
//includes at least one number
//includes at least one uppercase letter
function isValidPassword(password) {
	const hasMinLength = password.length >= 8;
	const hasNumber = [...password].some(char => !isNaN(char));
	const hasUpperCase = [...password].some(char => char === char.toUpperCase() && isNaN(char));
	// hasNumber = password.match(/\d/);
	// hasUpperCase = password.match(/[A-Z]/);
	// hasNumber = /\d/.test(password);
	// hasUpperCase = /[A-Z]/.test(password);
	return hasMinLength && hasNumber && hasUpperCase;
}


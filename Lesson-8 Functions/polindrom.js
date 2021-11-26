let userInput1 = 'Ada';
let isPalindrom = true;
let userInput = userInput1.toLowerCase();

for (let i = 0; i < userInput.length / 2 && isPalindrom; i++) {
	if (userInput[i] !== userInput[userInput.length-i -1]) {
		isPalindrom = false;
	} 
}

isPalindrom? console.log('Palindrome!') : console.log('Not a Palindrome!')
/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	
}

function duplicateCharMinCount(string, minCount) {
	let newArr = []
	let strArr = string.split("")
	
	for (let i = 0; i < strArr.length; i++){
		let letter = strArr[i]
		let count = 1

		for (let j = i + 1; j < strArr.length; j++){
			let letter2 = strArr[j]
			
			if (letter === letter2){
				count++
				if((count >= minCount) && !newArr.includes(letter)){
					newArr.push(letter)
				}
			}
		}
	}
	return newArr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;

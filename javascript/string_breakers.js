// DESCRIPTION:

// I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

// Example:

// N = 5

// String = "This is an example string"

// Return value:
// Thisi
// sanex
// ample
// strin
// g

// Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'


// TAGS: FUNDAMENTALS STRINGS LOOPS CONTROL FLOW BASIC LANGUAGE FEATURES CONDITIONAL STATEMENTS


// PSEUDOCODE/NOTES:

// Break the string up into individual characters
// Group the characters into separate strings of length N by looping through the length of the input string and incrementing a count variable. Every time the count variable reaches N, start the count over and put the next batch of characters into a new string (or array)
// Combine the strings back together and format the lines by inserting line break characters


// SOLUTION:

const stringBreakers = (n, string) => {
  let stringChars = string.split(' ').join('')
  let count = 0
  let splitString = ''

  for(let i = 0; i < stringChars.length; i++) {
    if(count < n) {
      splitString += stringChars[i]
      count++
    } else {
      splitString += '\n' + stringChars[i]
      count = 1
    }
  }

  return splitString
}


// TESTS:

let result
let solution

result = stringBreakers(5, 'This is an example string')
solution = 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'
console.log(result === solution ? 'Correct!' : 'Wrong!')

// DESCRIPTION:

// You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters. Please see provided test cases for exact output format.

// The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

// Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).

// Please see provided test case(s) for examples.

// JS Note

// JS students, like Python ones, must implement the diamond(n) method, and return null for invalid input.


// TAGS: FUNDAMENTALS STRINGS


// PSEUDOCODE/NOTES:

// Return null if n is even or less than 1
// Print the middle line using the input
// Make an array containing each line below the mid line and include spaces and new line character
// Reverse the bottom array and join it into a string to make the lines above the mid line
// Join the bottom array into a string to make the lines below the mid line
// Concatenate and return the top, mid, and bottom strings to create the final diamond-shape string


// SOLUTION:

const diamond = (n) => {
  if(n % 2 == 0 || n < 1) return null

  const numLines  = Math.floor(n / 2)
  let mid         = '*'.repeat(n) + '\n'
  let bottomArray = []

  for(let i = 0; i < numLines; i++) {
    bottomArray.push(' '.repeat(i + 1) + '*'.repeat(n -= 2) + '\n')
  }

  bottom = bottomArray.join('')
  let top = bottomArray.reverse().join('')

  return top + mid + bottom
}


// TESTS:

let result
let solution

result = diamond(5)
solution = "  *\n ***\n*****\n ***\n  *\n"
console.log(result === solution ? 'Correct!' : 'Wrong!')

result = diamond(3)
solution = " *\n***\n *\n"
console.log(result === solution ? 'Correct!' : 'Wrong!')

result = diamond(1)
solution = "*\n"
console.log(result === solution ? 'Correct!' : 'Wrong!')

result = diamond(2)
solution = null
console.log(result === solution ? 'Correct!' : 'Wrong!')

result = diamond(-3)
solution = null
console.log(result === solution ? 'Correct!' : 'Wrong!')

result = diamond(0)
solution = null
console.log(result === solution ? 'Correct!' : 'Wrong!')

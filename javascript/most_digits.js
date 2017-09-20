// DESCRIPTION:

// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.


// TAGS: FUNDAMENTALS NUMBERS STRINGS


// PSEUDOCODE/NOTES:




// SOLUTION:

const findLongest = (array) => {
  let maxDigits = 0
  let maxNum = 0

  array.forEach((num) => {
    let counter = 0
    let numCopy = num

    while(numCopy >= 1) {
      numCopy /= 10
      counter++
    }

    if(counter > maxDigits) {
      maxDigits = counter
      maxNum = num
    }
  })
  return maxNum
}


// TESTS:

let result
let solution

result = findLongest([1, 10, 100])
solution = 100
console.log(result === solution ? 'Correct!' : 'Wrong!')

result = findLongest([9000, 8, 800])
solution = 9000
console.log(result === solution ? 'Correct!' : 'Wrong!')

result = findLongest([8, 900, 500])
solution = 900
console.log(result === solution ? 'Correct!' : 'Wrong!')

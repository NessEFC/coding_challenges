// DESCRIPTION:

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.


// TAGS: FUNDAMENTALS RECURSION ALGORITHMS COMPUTABILITY THEORY THEORETICAL COMPUTER SCIENCE MATHEMATICS NUMBERS


// PSEUDOCODE/NOTES:




// SOLUTION:

const factorial = n => {
  return n === 0 ? 1 : n * factorial(n - 1)
}


// TESTS:

let result
let solution

result = factorial(0)
solution = 1
console.log(result === solution ? 'Correct!' : 'Wrong!')

result = factorial(1)
solution = 1
console.log(result === solution ? 'Correct!' : 'Wrong!')

result = factorial(2)
solution = 2
console.log(result === solution ? 'Correct!' : 'Wrong!')

result = factorial(3)
solution = 6
console.log(result === solution ? 'Correct!' : 'Wrong!')

// DESCRIPTION:

// Alex is a devoted fan of snooker Masters and in particular, he recorded results of all matches. Help Alex to know the score of matches.

// Hint:
// A string with a score presented as follows: "24-79(72); 16-101(53); ..."
// "24" - Points scored the first player;
// "79" - the number of points of the second player.
// "(72)" - the maximum score for one approach.
// Also, the player's account may be expressed as 105(53,52):
// "105" - points in the frame, "53" and "52" - two separate numbers(not float) maximum points in the frame.
// Frames are separated by ";" and players score - "-"
// It should count the number of frames won by one and another player, and output the data as a "[10,7]"

// Statistics URL: http://cuetracker.net/tournaments/masters/2017/2260


// TAGS: ALGORITHMS STATISTICS DATA ARRAYS STRINGS


// PSEUDOCODE/NOTES:




// SOLUTION:

const frame = (score) => {
  const frameScores = score.split(';').map((frame) => {
    const left = frame.indexOf('(')
    const right = frame.indexOf(')')
    const parens = frame.slice(left, right + 1)
    const scrubbedFrame = frame.replace(parens, '')
    return scrubbedFrame.split('-')
  })

  let player1 = 0
  let player2 = 0

  frameScores.forEach((frame) => {
    parseInt(frame[0]) > parseInt(frame[1]) ? player1++ : player2++
  })

  return [player1, player2]
}


// TESTS:

let score = "24-79(72); 16-101(53); 86(58)-27; 31-90(74); 0-115(115); 67-40; 61-21; 81(55)-23; 51-14; 124(56,68)-4; 67-12; 108(85)-15; 1-117(117); 1-92(92); 130(112)-0; 1-106(53); 59-39";

let result
let solution

result = frame(score)
solution = [10, 7]
console.log(result === solution ? 'Correct!' : 'Wrong!')

# INSTRUCTIONS

# Task

# "AL-AHLY" and "Zamalek" are the best teams in Egypt, but "AL-AHLY" always wins the matches between them. "Zamalek" managers want to know what is the best match they've played so far.

# The best match is the match they lost with the minimum goal difference. If there is more than one match with the same difference, choose the one "Zamalek" scored more goals in.

# Given the information about all matches they played, return the index of the best match (0-based). If more than one valid result, return the smallest index.

# Example

# For ALAHLYGoals = [6,4] and zamalekGoals = [1,2], the output should be 1.

# Because 4 - 2 is less than 6 - 1

# For ALAHLYGoals = [1,2,3,4,5] and zamalekGoals = [0,1,2,3,4], the output should be 4.

# The goal difference of all matches are 1, but at 4th match "Zamalek" scored more goals in. So the result is 4.

# Input/Output

# [input] integer array ALAHLYGoals

# The number of goals "AL-AHLY" scored in each match.
# [input] integer array zamalekGoals

# The number of goals "Zamalek" scored in each match. It is guaranteed that zamalekGoals[i] < ALAHLYGoals[i] for each element.
# [output] an integer

# Index of the best match.


# TAGS: FUNDAMENTALS


# PSEUDOCODE/NOTES:




# SOLUTION:

def best_match(goals1, goals2)
  min = goals1.first - goals2.first
  results = {}

  goals1.zip(goals2).each_with_index do |score, n|
    diff = score[0] - score[1]
    if diff < min
      results.clear
      results[n] = score[1]
      min = diff
    elsif diff == min
      results[n] = score[1]
    end
  end
  results.max_by { |k, v| v }.first
end


# TESTS:

result = best_match([6, 4],[1, 2])
solution = 1
puts (result == solution ? "Correct!" : "Wrong!")

result = best_match([1],[0])
solution = 0
puts (result == solution ? "Correct!" : "Wrong!")

result = best_match([1, 2, 3, 4, 5],[0, 1, 2, 3, 4])
solution = 4
puts (result == solution ? "Correct!" : "Wrong!")

result = best_match([3, 4, 3],[1, 1, 2])
solution = 2
puts (result == solution ? "Correct!" : "Wrong!")

result = best_match([4, 3, 4],[1, 1, 1])
solution = 1
puts (result == solution ? "Correct!" : "Wrong!")

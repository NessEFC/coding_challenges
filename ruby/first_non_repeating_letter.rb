# INSTRUCTIONS:

# Write a function named firstNonRepeatingCharacter that takes a string input, and returns the first character that is not repeated anywhere in the string.

# For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

# As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

# If a string contains all repeating characters, it should return the empty string ("").


# TAGS: ALGORITHMS STRINGS SEARCH


# PSEUDOCODE/NOTES:

# If empty, return empty string ""
# If all one letter, return ""
# If all repeats, return ""
# If none of the above are true, turn the string into downcase and evaluate if there are non-repeats


# SOLUTION:

def  first_non_repeating_letter(s)
  s.chars.delete_if { |char| s.downcase.chars.count(char.downcase) > 1 }.first || ''
end


# TESTS:

result = first_non_repeating_letter('sS')
solution = ''
puts (result == solution ? "Correct!" : "Wrong!")

result = first_non_repeating_letter('')
solution = ''
puts (result == solution ? "Correct!" : "Wrong!")

result = first_non_repeating_letter('stress')
solution = 't'
puts (result == solution ? "Correct!" : "Wrong!")

result = first_non_repeating_letter('moonmen')
solution = 'e'
puts (result == solution ? "Correct!" : "Wrong!")

result = first_non_repeating_letter('aaaaabbbbcccccc')
solution = ''
puts (result == solution ? "Correct!" : "Wrong!")

result = first_non_repeating_letter('sTreSS')
solution = 'T'
puts (result == solution ? "Correct!" : "Wrong!")

result = first_non_repeating_letter('aAbB')
solution = ''
puts (result == solution ? "Correct!" : "Wrong!")

result = first_non_repeating_letter('aA,bB')
solution = ','
puts (result == solution ? "Correct!" : "Wrong!")

result = first_non_repeating_letter('abba')
solution = ''
puts (result == solution ? "Correct!" : "Wrong!")

result = first_non_repeating_letter('aa')
solution = ''
puts (result == solution ? "Correct!" : "Wrong!")

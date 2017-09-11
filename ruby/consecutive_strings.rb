# Description:

# You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

# Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

# n being the length of the string array, if n = 0 or k > n or k <= 0 return "".


# Pseudocode:

# Go through the array and group the strings together according to the k integer value
# join these smaller arrays and count their lengths
# if the consecutive strings ahead of the current strings is larger, keep that one
# else, return the current one
# afterwards, go back and add the edge case conditionals:
# if strarr.length == 0, or k > strarr.length, or k <=0, return ""


# Solution 1:

def longest_consec(strarr, k)
  return "" if (strarr.length == 0) || (k > strarr.length) || (k <= 0)
  consecutive_strings = []
  n = 0
  while n <= strarr.length do
    consecutive_strings << strarr.slice(n...(n+k)).join
    n += 1
  end
  final = [""]
  consecutive_strings.each do |string|
    if (string != "") && (string.length > final[0].length)
      final.unshift(string)
    end
  end
  final.first
end


# Solution 2:

def longest_consec(strarr, k)
  return "" if (strarr.length == 0) || (k > strarr.length) || (k <= 0)
  consecutive_strings = strarr.each_cons(k).map { |strings| strings.join }
  final = [""]
  consecutive_strings.each do |string|
    if string.length > final[0].length
      final.unshift(string)
    end
  end
  final.first
end


# Solution 3:

def longest_consec(strarr, k)
  return "" if (strarr.length == 0) || (k > strarr.length) || (k <= 0)
  strarr.each_cons(k).map { |strings| strings.join }.max_by { |str| str.length }
end


# Tests:

result = longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
solution = "abigailtheta"
puts (result == solution ? "Correct!" : "Wrong!")

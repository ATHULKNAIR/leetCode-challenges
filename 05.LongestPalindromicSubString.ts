// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

  // 1.
function findMedianSortedArrays(s) {
  function checkForPalindrome(str) {
    return str === str.split("").reverse().join("");
  }
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= i; j--) {
      if (s[i] === s[j] && checkForPalindrome(s.slice(i, j + 1))) {
        longest =
          s.slice(i, j + 1).length > longest.length
            ? s.slice(i, j + 1)
            : longest;
      }
    }
  }
  return longest;
}

//2. 

function findMedianSortedArrays(s) {
  let longestPalindrome = "";
  for (let i = 0; i < s.length; i++) {
    let currentPalindrome = s[i];
    let right = 1;
    while (s[i] === s[i + right]) {
      currentPalindrome = s.substring(i, i + right + 1);
      right += 1;
    }
    let left = 1;
    while (
      i - left >= 0 &&
      i + right < s.length &&
      s[i - left] === s[i + right]
    ) {
      currentPalindrome = s.substring(i - left, i + right + 1);
      left++;
      right++;
    }
    if (currentPalindrome.length >= longestPalindrome.length) {
      longestPalindrome = currentPalindrome;
    }
  }

  return longestPalindrome;
}

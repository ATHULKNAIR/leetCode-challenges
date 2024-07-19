// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Time compleity 0(N^2)
function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    let string = "";
    for (let i = 0; i < s.length; i++) {
        string = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (string.includes(s[j])) break;
            else string += s[j];
        }
        max = Math.max(max, string.length);
    }
    return max;
};

// Push the strings to an array,
// calculate max of max and length of array
// if current char is present in array, find index
// remove (splice) all index from 0 to index+1. ( make array.length=0 )

// Time complexity O(N)
function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    let stringArray = [];
    for (let i = 0; i < s.length; i++) {
        const index = stringArray.indexOf(s[i])
        if (index !== -1) stringArray.splice(0, index + 1);
        stringArray.push(s[i]);
        max = Math.max(max, stringArray.length);
    }
    return max;
};

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


function reverse(x: number): number {
    let rev = 0;
    let sign = Math.sign(x)
    if (sign === -1) x = x * sign
    while (x > 0) {
        rev = rev * 10 + (x % 10);
        x = Math.floor(x / 10)
    }
    if (rev > Math.pow(2, 31) - 1) return 0;
    return rev * sign
};

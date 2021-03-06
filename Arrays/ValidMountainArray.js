// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]



// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true

var validMountainArray = function (arr) {
    let hillTop = Math.max(...arr);
    let index = arr.indexOf(hillTop);

    if (index === 0 || index === arr.length - 1) return false
    

        for (let i = index; i >= 0; i--) {
            if (arr[i - 1] && arr[i] <= arr[i - 1]) {
                return false;
            }
        }
        for (let i = index; i < arr.length; i++) {
            if (arr[i + 1] && arr[i] <= arr[i + 1]) {
                return false;
            }
        }
    
    return true
};
console.log(validMountainArray([3,6,5,6,7,6,5,3,0]))
// Given an array nums of n integers where nums[i] is in the range [1, n], 
// return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

var findDisappearedNumbers = function(nums) {
    // let max = Math.max(...nums)
    let length = nums.length;
    let ary = []
    for(let i =1;i<=length;i++){
        if(!nums.includes(i)){
            ary.push(i)
        }
    }
    return ary
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
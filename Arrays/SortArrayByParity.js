// Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, 
// followed by all the odd elements of nums.

// You may return any answer array that satisfies this condition.

 

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

var sortArrayByParity = function(nums) {
  
    let i =0, j = nums.length-1;
    while(i<j){
        if(nums[i]%2 > nums[j]%2){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        if(nums[i]%2===0) i++;
        else j--;
        
    }
    return nums
    
};
console.log(sortArrayByParity([3,1,2,4]))
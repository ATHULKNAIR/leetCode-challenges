// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


// sort both arrays
// find length of array
// median of even length of array is ((length/2 + ((length/2)-1))/2
// median of odd length of array is array[(length-1)/2]

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const newArray = [...nums1, ...nums2].sort((x, y) => x - y);
    const middeleIndex = newArray.length / 2;
    const median =
        newArray.length % 2 !== 0
            ? newArray[Math.floor(middeleIndex)]
            : (newArray[middeleIndex] + newArray[middeleIndex - 1]) / 2;
    return median;
};

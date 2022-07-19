/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. 
 * A subarray is a contiguous part of an array.
 * 
 * Example 1
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * Solution:
 * - We will loop through the array while summing up all the numbers.
 * - During the summing of the number we need to check that the sum should always be non negative number.
 * - For result we will set the value which is greater than the sum or result.
 */

const maxSubArray = (nums) => {
    if (nums.length == 0) return 0;
    let result = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result = Math.max(sum, result);
        sum = sum < 0 ? 0 : sum;
    }
    console.log(result);
    return result;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
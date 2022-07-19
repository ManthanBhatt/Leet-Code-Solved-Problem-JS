/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Solution: Use compliment of number to find the diff between 2 numbers.
 */

const twoSum = (nums, target) => {
    const compliment = {};
    for (let ind = 0; ind <= nums.length; ind++) {
        const key = target - nums[ind];
        const check = compliment[key] !== undefined;
        console.log(key, check, compliment);
        if (check) {
            return [compliment[key], ind];
        }
        compliment[nums[ind]] = ind;
    }
}

twoSum([2, 7, 11, 15], 9)

/**
 * Learning
 * I was on the right track but while implementing the solution I saved the diff value in the compliment object in order to find the pair which resulted in giving issue in the later set's of input
 */
/**
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

const arr = [2, 7, 11, 15];
const sum = 9;

const twoSum = (arr, sum) => {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        const diff = sum - arr[i];
        if (obj[diff] !== undefined) {
            return [obj[diff], i];
        }
        obj[arr[i]] = i;
    }

    return [];
}

console.log(twoSum(arr, sum)); //[0,1]
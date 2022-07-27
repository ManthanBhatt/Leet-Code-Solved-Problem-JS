/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * 
 * Example 1:
 * Input: x = 123
 * Output: 321
 * 
 * Example 2:
 * Input: x = -123
 * Output: -321
 * 
 * Example 3:
 * Input: x = 120
 * Output: 21
 * 
 * Constraints:
 * -231 <= x <= 231 - 1
 * 
 * @param x 
 * @returns reverseNumber
 */

const reverse = (x) => {
    let str = x.toString();
    let result = '';
    for (let i = str.length - 1; i > -1; i--) {
        result += str[i];
    }

    let ans = x < 0 ? parseInt('-' + result) : parseInt(result);
    if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31) - 1) return 0;
    return ans;
}
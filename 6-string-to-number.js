/**
 * String to integer
 * 
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
 * 
 * Example 1:
 * Input: s = "42"
 * Output: 42
 * Explanation: The underlined characters are what is read in, the caret is the current reader position.
 * Step 1: "42" (no characters read because there is no leading whitespace)
 *          ^
 * Step 2: "42" (no characters read because there is neither a '-' nor '+')
 *           ^
 * Step 3: "42" ("42" is read in)
 * The parsed integer is 42.
 * Since 42 is in the range [-231, 231 - 1], the final result is 42.
 * 
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
    let number = parseInt(s.trim());

    const min = Math.pow(-2, 31);
    const max = Math.pow(2, 31) - 1;

    if (isNaN(number)) return 0;

    if (number < min) number = min;

    if (number > max) number = max;

    return number;
};
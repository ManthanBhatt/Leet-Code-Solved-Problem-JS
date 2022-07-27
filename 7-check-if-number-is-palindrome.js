/**
 * Given an integer x, return true if x is palindrome integer.
 * 
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0) return false;
    let str = x.toString();
    let reverseString = '';
    for (let i = (str.length - 1); i >= 0; i--) {
        reverseString += str[i];
    }

    return str === reverseString;
};
/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example 1: 
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Solution:
 * - For solving this we will have to keep trace number of unique character sequence.
 * - So with 1st outer loop we will start with a.
 * - In the inner loop we will check if the char exist in the string then break the loop and set the largest length else set the character in the unique string.
 * - While setting the largest length we will check if the unique string length is greater than the largest length then we will replace the length.
 * - Once we have checked all the character sequence we will return the largest length found.
 */

const lengthOfLongestSubstring = (str) => {
    let largestLen = 0;
    for (let i = 0; i < str.length; i++) {
        let unqStr = str[i];
        for (let j = (i + 1); j < str.length; j++) {
            if (unqStr.indexOf(str[j]) > -1) {
                break;
            }
            unqStr += str[j];
        }
        if (largestLen < unqStr.length) {
            largestLen = unqStr.length
        }
    }
    console.log(largestLen);
    return largestLen;
}

lengthOfLongestSubstring('abcabcab')
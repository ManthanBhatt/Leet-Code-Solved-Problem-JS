/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example 1
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
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
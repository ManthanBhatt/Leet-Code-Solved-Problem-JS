/**
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */

const lengthOfLongestSubString = (s) => {
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        let str = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (str.includes(s[j])) {
                break;
            }
            str += s[j];
        }

        if (maxLength < str.length) maxLength = str.length;
    }

    return maxLength;
}

const str1 = "abcabcbb";
console.log(lengthOfLongestSubString(str1)); //3

const str2 = "bbbbb";
console.log(lengthOfLongestSubString(str2)); //1

const str3 = "pwwkew";
console.log(lengthOfLongestSubString(str3)); //3
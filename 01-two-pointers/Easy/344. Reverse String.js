/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let leftValue = s[left];
        let rightValue = s[right]
        s[left] = rightValue
        s[right] = leftValue
        left++;
        right--;
    }
    return s;
};

// Example 1:
let input1 = ["h", "e", "l", "l", "o"];
// Output: ["o", "l", "l", "e", "h"]
console.log(reverseString(input1))

// Example 2:
let input2 = ["H", "a", "n", "n", "a", "h"]
// Output: ["h", "a", "n", "n", "a", "H"]
console.log(reverseString(input2))

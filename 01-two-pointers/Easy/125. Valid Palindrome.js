/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        if (!isAlphaNumeric(s[left])) {
            left++;
            continue;
        }

        if (!isAlphaNumeric(s[right])) {
            right--;
            continue;
        }

        let leftWord = s[left].toLowerCase();
        let rightWord = s[right].toLowerCase();

        if (leftWord != rightWord) {
            return false;
        }
        left++;
        right--;

    }
    return true;
};

function isAlphaNumeric(char) {
    return (
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9')
    );
}
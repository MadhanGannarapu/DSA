/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let write = 0;
    let read = 1;
    while (read < nums.length) {

        if (nums[write] != nums[read]) {
            nums[write + 1] = nums[read];
            write++;
        }
        read++

    }
    return write + 1;
};

// Example 1:
let nums1 = [1, 1, 2]
// Output: 2, nums1 = [1, 2, _]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k(hence they are underscores).
console.log(removeDuplicates(nums1))

// Example 2:
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// Output: 5, nums2 = [0, 1, 2, 3, 4, _, _, _, _, _]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k(hence they are underscores).
console.log(removeDuplicates(nums2))


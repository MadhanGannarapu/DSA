/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let write = 0;
    let read = 0;

    while (read < nums.length ) {
        if (nums[read] != val) {
            nums[write] = nums[read];
            write++
        }

        read++
    }
    console.log(nums)
    return write;
};

console.log(removeElement([2], 3))
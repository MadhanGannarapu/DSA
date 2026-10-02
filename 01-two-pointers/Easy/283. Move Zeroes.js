/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let write = 0, read = 0;

    while (read < nums.length) {

        if (nums[read] != 0) {
            let currentWrite = nums[write]

            nums[write] = nums[read];
            nums[read] = currentWrite;
            write++;
        }

        read++

    }
};
let e1 = [1], e2 = [0, 1, 0, 3, 12], e3 = [2, 1];
moveZeroes(e1);
moveZeroes(e2);
moveZeroes(e3);

// console.log(e1)
// console.log(e2)
// console.log(e3)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length-count; i++) {
        if (nums[i] !== 0)
            continue;
        else {
            for (let j = i; j < nums.length - 1; j++) {
                nums[j] = nums[j + 1];
            }
            count++;
            i--;
        }
    }
    for (let i = nums.length - count; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(moveZeroes([0, 0, 0, 0, 0]));
console.log(moveZeroes([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
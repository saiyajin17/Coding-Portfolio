/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {

    const stack = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j <= nums.length; j++) {
            stack[i] = -1;
            if (nums[i] < nums[(j + i) % nums.length]) {
                stack[i] = nums[(j + i) % nums.length]
                break;
            }
        }
    }

    return stack;
};


/* OPTIMISED APPROACH USING STACK */
var nextGreaterElements = function (nums) {
    let stack = [];
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
            res[stack.pop()] = nums[i];
        }
        stack.push(i);
    }

    for (let i = 0; i < nums.length - 1; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
            res[stack.pop()] = nums[i];
        }
    }

    while (stack.length) {
        res[stack.pop()] = -1;
    }
    return res;
};

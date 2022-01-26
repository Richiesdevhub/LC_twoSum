var twoSum = function(nums, target) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        if ((2 <= nums.length <= 104) || (Math.pow(-10, 9) <= nums[i] <= Math.pow(10, 9)) || (Math.pow(-10, 9) <= target <= Math.pow(10, 9))) {
            console.log("i:" + i);
            for (let j = 0; j < nums.length; j++) {
                console.log("j:" + j);
                if (i !== j) {
                    console.log("i!==j;")
                    if (nums[i] + nums[j] == target) {
                        console.log("inside sum = target")
                        output[0] = i;
                        output[1] = j;
                        return output
                    }
                }
                console.log("after i!==j;")
            }
        }
    }
};

console.log(twoSum([3, 3], 6));
// console.log(twoSum([2,7,11,15],9));
var twoSum = function(nums, target) {
    let output = [];
    for (let i of nums) {
        console.log("i:" + nums.indexOf(i));
        for (let j of nums) {

            if (nums.indexOf(i) !== nums.indexOf(j)) {
                if (i + j == target) {
                    output[0] = nums.indexOf(i);
                    output[1] = nums.indexOf(j);
                    console.log("j:" + nums.indexOf(j));
                    return output;
                }
            }
            //           console.log("j:"+nums.indexOf(j));

        }
    }
};

console.log(twoSum([3, 3], 6))
    // console.log(twoSum([2,7,11,15],9));
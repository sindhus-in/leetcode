/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumV1 = function(nums, target) {
    console.log("numbers are", nums)
    var sum = nums[0],
        deficit = Math.abs(sum - target);
    console.log("target is", target)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == deficit) {
            return ([0, i])
        }
    }
};

// console.log("Found it! the indices are:", twoSumV1([2,7,11,15], 9))
// console.log("Found it! the indices are:", twoSumV1([3,3], 6))
// console.log("Found it! the indices are:", twoSumV1([3,2,4], 6)) // does not work

var twoSumV2 = function(nums, target) {
    console.log("the array is:", nums);
    console.log("the target is:", target);
    for(var i=0; i <nums.length; i++ ){
        var deficit= target - nums[i]
        for(var j=0; j < nums.length; j++) {
            if (nums[j] == deficit) {
                return [i, j]
            }
    }}
};

// console.log("Found it! the indices are:", twoSumV2([2,7,11,15], 9)) // works
// console.log("Found it! the indices are:", twoSumV2([3,3], 6)) // not printing correct indices
// console.log("Found it! the indices are:", twoSumV2([3,2,4], 6)) // not printing correct indices

var twoSumV3 = function(nums, target) {
    console.log("the array is:", nums);
    console.log("the target is:", target);
    for(var i=0; i<nums.length; i++ ){
        for(var j=0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i !== j) {
                return ([i, j])
            }
    }}
};

// console.log("Found it! the indices are:", twoSumV3([2,7,11,15], 9)) // works
// console.log("Found it! the indices are:", twoSumV3([1,3,3], 6)) // not printing correct indices
// console.log("Found it! the indices are:", twoSumV3([3,2,4], 6)) // not printing correct indices

var twoSumV4 = function(nums, target) {
    console.log("the array is:", nums, "target is:", target);
    for(var i=0; i<nums.length; i++ ){
        for(var j=i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return ([i, j])
            }
    }}
};

console.log("Found it! the indices are:", twoSumV4([2,7,11,15], 9)) // works
console.log("Found it! the indices are:", twoSumV4([1,3,3], 6)) // not printing correct indices
console.log("Found it! the indices are:", twoSumV4([3,2,4], 6)) // not printing correct indices
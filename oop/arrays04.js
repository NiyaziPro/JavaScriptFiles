function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let k = i + 1; k < nums.length; k++) {
        //console.log(i,k,nums[i]+nums[k]);

      if (nums[i] + nums[k] == target) {
        return [i, k];
      }
    }
  }
}

console.log(twoSum([3, 5, 2, 8, 4, 9], 17));

function findMedian(nums) {
  nums.sort((a, b) => a - b);

  let middle = Math.floor(nums.length / 2);
  if (nums.length % 2 !== 0) {
    return nums[middle];
  } else {
    return nums[middle - 1] + nums[middle] / 2;
  }
}

console.log(findMedian([7, 1, 3, 4, 9]));

function findSecondLargest(nums) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of nums) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  if (secondLargest === -Infinity) {
    return null;
  }

  return secondLargest;
}

console.log(findSecondLargest([1, 3, 3, 2, 1, 3, 4]));

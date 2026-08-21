function findMode(arr) {
  const map = new Map();

  let mode = arr[0];
  let maxCount = 0;

  for (const item of arr) {
    const count = (map.get(item) || 0) + 1;
    map.set(item, count);

    if (count > maxCount) {
      maxCount = count;
      mode = item;
    }
  }

  return mode;
}

console.log(findMode([1, 3, 3, 2, 1, 3, 4]));

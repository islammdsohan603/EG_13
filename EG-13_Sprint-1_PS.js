function naturalSort(arr) {
  return arr.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

console.log(naturalSort(["file10.txt", "file2.txt", "file1.txt"]));

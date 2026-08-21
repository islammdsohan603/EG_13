function findGCD(a, b) {
  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

function findLCM(a, b) {
  return (a * b) / findGCD(a, b);
}

console.log(findLCM(12, 18));

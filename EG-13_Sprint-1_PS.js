function generateFibonacci(n) {
  const fibonacci = [];
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    fibonacci.push(a);
    let next = a + b;
    a = b;
    b = next;
  }

  return fibonacci;
}

console.log(generateFibonacci(7));

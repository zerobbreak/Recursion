function fibs(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextFib = result[i - 1] + result[i - 2];
    result.push(nextFib);
  }

  return result;
}

console.log("Iterative: " + fibs(8));

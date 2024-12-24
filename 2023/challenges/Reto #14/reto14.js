function maxGifts(houses) {
  const n = houses.length;
  if (n === 0) {
    return 0;
  }
  const maxGiftsArray = Array(n).fill(0);

  maxGiftsArray[0] = houses[0];
  maxGiftsArray[1] = Math.max(houses[0], houses[1]);

  for (let i = 2; i < n; i++) {
    maxGiftsArray[i] = Math.max(
      maxGiftsArray[i - 1],
      maxGiftsArray[i - 2] + houses[i]
    );
  }
  return maxGiftsArray[n - 1];
}

// Ejemplos de uso
console.log(maxGifts([2, 4, 2])); // Output: 4
console.log(maxGifts([5, 1, 1, 5])); // Output: 10
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // Output: 9
console.log(maxGifts([1, 3, 1, 3, 100])); // Output: 103

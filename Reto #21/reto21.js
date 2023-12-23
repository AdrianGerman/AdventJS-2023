function findBalancedSegment(message) {
  let maxLength = 0;
  let startIndex = -1;

  for (let i = 0; i < message.length; i++) {
    let count0 = 0;
    let count1 = 0;

    for (let j = i; j < message.length; j++) {
      if (message[j] === 0) {
        count0++;
      } else {
        count1++;
      }

      if (count0 === count1 && j - i + 1 > maxLength) {
        maxLength = j - i + 1;
        startIndex = i;
      }
    }
  }

  if (startIndex === -1) {
    return [];
  }

  return [startIndex, startIndex + maxLength - 1];
}

// Ejemplos de uso
console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])); // [2, 5]
console.log(findBalancedSegment([1, 1, 0])); // [1, 2]
console.log(findBalancedSegment([1, 1, 1])); // []

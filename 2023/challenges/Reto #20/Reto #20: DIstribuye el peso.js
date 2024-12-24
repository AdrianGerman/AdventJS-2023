function distributeGifts(weights) {
  const rows = weights.length;
  const cols = weights[0].length;

  const result = new Array(rows)
    .fill(null)
    .map(() => new Array(cols).fill(null));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let sum = 0;
      let count = 0;

      if (i > 0 && weights[i - 1][j] !== null) {
        sum += weights[i - 1][j];
        count++;
      }

      if (i < rows - 1 && weights[i + 1][j] !== null) {
        sum += weights[i + 1][j];
        count++;
      }

      if (j > 0 && weights[i][j - 1] !== null) {
        sum += weights[i][j - 1];
        count++;
      }

      if (j < cols - 1 && weights[i][j + 1] !== null) {
        sum += weights[i][j + 1];
        count++;
      }

      if (weights[i][j] !== null) {
        sum += weights[i][j];
        count++;
      }

      result[i][j] = count > 0 ? Math.round(sum / count) : null;
    }
  }

  return result;
}

// Ejemplo de uso
const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4],
];

const output = distributeGifts(input);
console.log(output);

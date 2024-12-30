function revealSabotage(store) {
  const rows = store.length;
  const cols = store[0].length;

  function countAdjacentSabotage(row, col) {
    let count = 0;

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (isValidIndex(i, j) && store[i][j] === "*") {
          count++;
        }
      }
    }

    return count > 0 ? count.toString() : " ";
  }

  function isValidIndex(i, j) {
    return i >= 0 && i < rows && j >= 0 && j < cols;
  }

  const result = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];

    for (let j = 0; j < cols; j++) {
      if (store[i][j] === "*") {
        newRow.push("*");
      } else {
        newRow.push(countAdjacentSabotage(i, j));
      }
    }

    result.push(newRow);
  }

  return result;
}

// Ejemplo de uso
const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
];

console.log(revealSabotage(store));

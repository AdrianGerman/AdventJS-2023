function travelDistance(map) {
  const rows = map.trim().split("\n");
  const numRows = rows.length;
  const numCols = rows[0].length;
  let santaPosition;
  const childrenPositions = [];

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const currentChar = rows[i][j];
      if (currentChar === "S") {
        santaPosition = { row: i, col: j };
      } else if (/[1-9]/.test(currentChar)) {
        const childNumber = parseInt(currentChar);
        childrenPositions[childNumber - 1] = { row: i, col: j };
      }
    }
  }

  let totalDistance = 0;

  function calculateDistance(pos1, pos2) {
    return Math.abs(pos1.row - pos2.row) + Math.abs(pos1.col - pos2.col);
  }

  for (let i = 0; i < childrenPositions.length; i++) {
    const childPosition = childrenPositions[i];
    totalDistance += calculateDistance(santaPosition, childPosition);
    santaPosition = childPosition;
  }

  return totalDistance;
}

// Ejemplos de uso
const result = travelDistance(`.....1....
  ..S.......
  ..........
  ....3.....
  ......2...`);
console.log(result); // -> 12

const result2 = travelDistance(`..S.1...`);
console.log(result2); // -> 2

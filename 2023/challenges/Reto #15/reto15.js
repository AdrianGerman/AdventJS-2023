function autonomousDrive(store, movements) {
  const findRobotPosition = () => {
    for (let i = 0; i < store.length; i++) {
      const index = store[i].indexOf("!");
      if (index !== -1) {
        return { row: i, col: index };
      }
    }
  };

  const calculateNewPosition = (position, movement) => {
    const { row, col } = position;
    switch (movement) {
      case "R":
        return { row, col: col + 1 };
      case "L":
        return { row, col: col - 1 };
      case "U":
        return { row: row - 1, col };
      case "D":
        return { row: row + 1, col };
      default:
        return position;
    }
  };

  const isValidMove = (position) => {
    const { row, col } = position;
    return (
      row >= 0 &&
      row < store.length &&
      col >= 0 &&
      col < store[row].length &&
      store[row][col] !== "*"
    );
  };

  const updateStore = (oldPosition, newPosition) => {
    const { row: oldRow, col: oldCol } = oldPosition;
    const { row: newRow, col: newCol } = newPosition;

    const robotSymbol = store[oldRow][oldCol];
    store[oldRow] =
      store[oldRow].substring(0, oldCol) +
      "." +
      store[oldRow].substring(oldCol + 1);
    store[newRow] =
      store[newRow].substring(0, newCol) +
      robotSymbol +
      store[newRow].substring(newCol + 1);
  };

  let robotPosition = findRobotPosition();

  for (const movement of movements) {
    const newPosition = calculateNewPosition(robotPosition, movement);

    if (isValidMove(newPosition)) {
      updateStore(robotPosition, newPosition);
      robotPosition = newPosition;
    }
  }

  return store;
}

// Ejemplo de uso:
const store = ["..!....", "...*.*."];
const movements = ["R", "R", "D", "L"];
const result = autonomousDrive(store, movements);
console.log(result);

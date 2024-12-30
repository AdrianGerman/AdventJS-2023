function getStaircasePaths(steps, maxJump) {
  const paths = [];

  function generatePaths(currentPath) {
    const currentSum = currentPath.reduce((sum, step) => sum + step, 0);

    if (currentSum === steps) {
      paths.push([...currentPath]);
      return;
    }

    for (let jump = 1; jump <= maxJump; jump++) {
      if (currentSum + jump <= steps) {
        currentPath.push(jump);
        generatePaths(currentPath);
        currentPath.pop();
      }
    }
  }

  generatePaths([]);

  return paths;
}

// Ejemplos
console.log(getStaircasePaths(2, 1)); // [[1, 1]]
console.log(getStaircasePaths(3, 3)); // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)); // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2));
/*
  [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 2],
    [1, 1, 2, 1],
    [1, 2, 1, 1],
    [1, 2, 2],
    [2, 1, 1, 1],
    [2, 1, 2],
    [2, 2, 1],
  ]
  */

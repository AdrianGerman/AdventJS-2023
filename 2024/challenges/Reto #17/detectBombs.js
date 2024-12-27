// --- code
function detectBombs(grid) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]

  const rows = grid.length
  const cols = grid[0].length
  const result = Array.from({ length: rows }, () => Array(cols).fill(0))

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c]) {
        for (const [dr, dc] of directions) {
          const nr = r + dr
          const nc = c + dc
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
            result[nr][nc] += 1
          }
        }
      }
    }
  }

  return result
}
// ---

// example
detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
  [true, true],
  [false, false],
  [true, true]
])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]

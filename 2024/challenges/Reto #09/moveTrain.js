// --- code
function moveTrain(board, mov) {
  const moves = { L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0] }
  const [headRow, headCol] = board.reduce((pos, row, r) => {
    const c = row.indexOf("@")
    return c !== -1 ? [r, c] : pos
  }, [])

  const [dr, dc] = moves[mov]
  const [nextRow, nextCol] = [headRow + dr, headCol + dc]

  if (!board[nextRow]?.[nextCol]) return "crash"
  const nextCell = board[nextRow][nextCol]
  if (nextCell === "o") return "crash"
  if (nextCell === "*") return "eat"
  return "none"
}
// ---

// example
const board = ["·····", "*····", "@····", "o····", "o····"]

console.log(moveTrain(board, "U"))
// ➞ 'eat'

console.log(moveTrain(board, "D"))
// ➞ 'crash'

console.log(moveTrain(board, "L"))
// ➞ 'crash'

console.log(moveTrain(board, "R"))
// ➞ 'none'

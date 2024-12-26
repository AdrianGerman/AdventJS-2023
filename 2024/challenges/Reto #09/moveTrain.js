function moveTrain(board, mov) {
  const moves = { L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0] }
  let headRow, headCol

  for (let r = 0; r < board.length; r++) {
    const c = board[r].indexOf("@")
    if (c !== -1) [headRow, headCol] = [r, c]
  }

  const [dr, dc] = moves[mov]
  const nextRow = headRow + dr,
    nextCol = headCol + dc

  if (
    nextRow < 0 ||
    nextRow >= board.length ||
    nextCol < 0 ||
    nextCol >= board[0].length
  ) {
    return "crash"
  }

  const nextCell = board[nextRow][nextCol]
  if (nextCell === "o") return "crash"
  if (nextCell === "*") return "eat"
  return "none"
}

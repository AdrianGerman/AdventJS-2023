// --- code
function isRobotBack(moves) {
  const invertMoves = { R: "L", L: "R", U: "D", D: "U" }

  moves = moves.replace(/!(.)/g, (_, char) => invertMoves[char])

  moves = moves.replace(/\*(.)/g, (_, char) => char + char)

  const conditional = /\?(.?)/g
  while (conditional.test(moves)) {
    moves = moves.replace(conditional, (_, char, offset) =>
      moves.substring(0, offset).includes(char) ? "" : char
    )
  }

  const movements = { R: [+1, +0], L: [-1, +0], U: [+0, +1], D: [+0, -1] }
  let x = 0,
    y = 0

  for (const movement of moves) {
    const [dx, dy] = movements[movement] || [0, 0]
    x += dx
    y += dy
  }

  return x === 0 && y === 0 ? true : [x, y]
}
// ---

// example
isRobotBack("R") // [1, 0]
isRobotBack("RL") // true
isRobotBack("RLUD") // true
isRobotBack("*RU") // [2, 1]
isRobotBack("R*U") // [1, 2]
isRobotBack("LLL!R") // [-4, 0]
isRobotBack("R?R") // [1, 0]
isRobotBack("U?D") // true
isRobotBack("R!L") // [2,0]
isRobotBack("U!D") // [0,2]
isRobotBack("R?L") // true
isRobotBack("U?U") // [0,1]
isRobotBack("*U?U") // [0,2]
isRobotBack("U?D?U") // true

// Ejemplos paso a paso:
isRobotBack("R!U?U") // [1,0]
// 'R'  -> se mueve a la derecha
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack("UU!U?D") // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'

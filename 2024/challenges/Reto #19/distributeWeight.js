// --- code
function distributeWeight(weight) {
  const boxes = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  }

  const sortedWeights = [1, 2, 5, 10]
  let output = []

  while (weight > 0) {
    const w = sortedWeights.findLast((x) => x <= weight)
    weight -= w

    if (output.length === 0) {
      output = [...boxes[w]]
    } else {
      const box = boxes[w]
      const mergedLine =
        box[box.length - 1] + output[0].slice(box[box.length - 1].length).trim()
      output = [...box.slice(0, -1), mergedLine, ...output.slice(1)]
    }
  }

  return output.join("\n")
}
// ---

// example
distributeWeight(1)
// Devuelve:
//  _
// |_|

distributeWeight(2)
// Devuelve:
//  ___
// |___|

distributeWeight(3)
// Devuelve:
//  _
// |_|_
// |___|

distributeWeight(4)
// Devuelve:
//  ___
// |___|
// |___|

distributeWeight(5)
// Devuelve:
//  _____
// |     |
// |_____|

distributeWeight(6)
// Devuelve:
//  _
// |_|___
// |     |
// |_____|

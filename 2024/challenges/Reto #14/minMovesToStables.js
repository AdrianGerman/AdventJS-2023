// --- code
function minMovesToStables(reindeer, stables) {
  reindeer.sort((a, b) => a - b)
  stables.sort((a, b) => a - b)

  return reindeer.reduce(
    (total, reno, index) => total + Math.abs(reno - stables[index]),
    0
  )
}
// ---

// example
minMovesToStables([2, 6, 9], [3, 8, 5]) // -> 3

minMovesToStables([1, 1, 3], [1, 8, 4])

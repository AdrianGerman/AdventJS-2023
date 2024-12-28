// --- code
function generateGiftSets(gifts) {
  const result = []

  function backtrack(start, currentCombination) {
    if (currentCombination.length > 0) {
      result.push([...currentCombination])
    }

    for (let i = start; i < gifts.length; i++) {
      currentCombination.push(gifts[i])
      backtrack(i + 1, currentCombination)
      currentCombination.pop()
    }
  }

  backtrack(0, [])

  result.sort(
    (a, b) => a.length - b.length || gifts.indexOf(a[0]) - gifts.indexOf(b[0])
  )

  return result
}
// ---

// example
generateGiftSets(["car", "doll", "puzzle"])
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(["ball"])
// [
//   ['ball']
// ]

generateGiftSets(["game", "pc"])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]

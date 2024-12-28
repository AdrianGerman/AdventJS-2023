// --- code
function findMissingNumbers(nums) {
  const maxNum = Math.max(...nums)
  const numSet = new Set(nums)
  const missing = []

  for (let i = 1; i <= maxNum; i++) {
    if (!numSet.has(i)) {
      missing.push(i)
    }
  }

  return missing
}
// ---

// example
findMissingNumbers([1, 2, 4, 6])
// [3, 5]

findMissingNumbers([4, 8, 7, 2])
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
// []

findDisappearedNumbers([5, 5, 5, 3, 3, 2, 1])
// [4]

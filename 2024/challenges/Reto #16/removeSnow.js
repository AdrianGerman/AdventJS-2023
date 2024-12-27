// --- code
function removeSnow(s) {
  let stack = []
  for (let char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  return stack.join("")
}
// ---

// example
removeSnow("zxxzoz") // -> "oz"

removeSnow("abcdd") // -> "abc"

removeSnow("zzz") // -> "z"

removeSnow("a") // -> "a"

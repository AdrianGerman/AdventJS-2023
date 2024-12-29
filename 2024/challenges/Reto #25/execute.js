// --- code
function execute(code) {
  let value = 0,
    jumpMap = {},
    stack = []
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "[" || code[i] === "{") stack.push(i)
    else if (code[i] === "]" || code[i] === "}") {
      const openIndex = stack.pop()
      jumpMap[openIndex] = i
      jumpMap[i] = openIndex
    }
  }
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "+") value++
    else if (code[i] === "-") value--
    else if (code[i] === "[" && value === 0) i = jumpMap[i]
    else if (code[i] === "]" && value !== 0) i = jumpMap[i] - 1
    else if (code[i] === "{" && value === 0) i = jumpMap[i]
  }
  return value
}
// ---

// example
execute("+++") // 3
execute("+--") // -1
execute(">+++[-]") // 0
execute(">>>+{++}") // 3
execute("+{[-]+}+") // 2
execute("{+}{+}{+}") // 0
execute("------[+]++") // 2
execute("-[++{-}]+{++++}") // 5

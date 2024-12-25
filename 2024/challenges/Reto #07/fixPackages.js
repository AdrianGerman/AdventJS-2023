// --- code
function fixPackages(packages) {
  const stack = [""]

  for (const char of packages) {
    if (char === "(") {
      stack.push("")
    } else if (char === ")") {
      const top = stack.pop()
      const reversed = top.split("").reverse().join("")
      stack[stack.length - 1] += reversed
    } else {
      stack[stack.length - 1] += char
    }
  }

  return stack.pop()
}
// ---

// example
fixPackages("a(cb)de")
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages("a(bc(def)g)h")
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages("abc(def(gh)i)jk")
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages("a(b(c))e")
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"

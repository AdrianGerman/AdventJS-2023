// --- code
function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    const row = box[i]
    for (let j = 1; j < row.length - 1; j++) {
      if (row[j] === "*") {
        return true
      }
    }
  }
  return false
}
// ---

// example
inBox(["###", "#*#", "###"]) // ➞ true

inBox(["####", "#* #", "#  #", "####"]) // ➞ true

inBox(["#####", "#   #", "#  #*", "#####"]) // ➞ false

inBox(["#####", "#   #", "#   #", "#   #", "#####"]) // ➞ false

// --- code
function createFrame(names) {
  const maxLength = Math.max(...names.map((name) => name.length))

  const frameWidth = maxLength + 4

  const border = "*".repeat(frameWidth)

  const framedNames = names.map((name) => {
    const paddedName = `* ${name.padEnd(maxLength, " ")} *`
    return paddedName
  })

  return [border, ...framedNames, border].join("\n")
}
// ---

// example
createFrame(["midu", "madeval", "educalvolpz"])

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

createFrame(["midu"])

// Resultado esperado:
// ********
// * midu *
// ********

createFrame(["a", "bb", "ccc"])

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

createFrame(["a", "bb", "ccc", "dddd"])

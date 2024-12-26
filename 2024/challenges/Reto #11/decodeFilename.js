// --- code
function decodeFilename(filename) {
  const match = filename.match(/\d+_([\w.-]+)\./)

  if (match) {
    return match[1]
  }

  return ""
}
// ---

// example
decodeFilename("2023122512345678_sleighDesign.png.grinchwa")
// ➞ "sleighDesign.png"

decodeFilename("42_chimney_dimensions.pdf.hack2023")
// ➞ "chimney_dimensions.pdf"

decodeFilename("987654321_elf-roster.csv.tempfile")
// ➞ "elf-roster.csv"

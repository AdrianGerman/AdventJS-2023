// --- code
function organizeShoes(shoes) {
  const counts = {}

  for (const shoe of shoes) {
    const { type, size } = shoe

    if (!counts[size]) {
      counts[size] = { I: 0, R: 0 }
    }

    counts[size][type]++
  }

  const result = []
  for (const size in counts) {
    const { I, R } = counts[size]
    const pairs = Math.min(I, R)

    for (let i = 0; i < pairs; i++) {
      result.push(Number(size))
    }
  }

  return result
}
// ---

// example
const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 }
]

organizeShoes(shoes2)
// [38, 38]

const shoes3 = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 }
]

organizeShoes(shoes3)
// []

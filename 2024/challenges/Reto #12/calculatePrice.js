// --- code
function calculatePrice(ornaments) {
  const values = { "*": 1, o: 5, "^": 10, "#": 50, "@": 100 }

  let total = 0
  let lastValue = 0

  for (const ornament of ornaments) {
    const currentValue = values[ornament]
    if (currentValue === undefined) return undefined
    total +=
      currentValue > lastValue ? currentValue - 2 * lastValue : currentValue
    lastValue = currentValue
  }

  return total
}
// ---

// example
calculatePrice("***") // 3   (1 + 1 + 1)
calculatePrice("*o") // 4   (5 - 1)
calculatePrice("o*") // 6   (5 + 1)
calculatePrice("*o*") // 5  (-1 + 5 + 1)
calculatePrice("**o*") // 6  (1 - 1 + 5 + 1)
calculatePrice("o***") // 8   (5 + 3)
calculatePrice("*o@") // 94  (-5 - 1 + 100)
calculatePrice("*#") // 49  (-1 + 50)
calculatePrice("@@@") // 300 (100 + 100 + 100)
calculatePrice("#@") // 50  (-50 + 100)
calculatePrice("#@Z") // undefined (Z es desconocido)

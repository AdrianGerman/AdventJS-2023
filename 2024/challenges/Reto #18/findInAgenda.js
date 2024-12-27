// --- code
function findInAgenda(agenda, phone) {
  const regexPhone = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/
  const regexName = /<([^>]+)>/

  const entries = agenda.split("\n")
  const results = []

  for (const entry of entries) {
    const phoneMatch = entry.match(regexPhone)
    const nameMatch = entry.match(regexName)

    if (phoneMatch && nameMatch) {
      const phoneNumber = phoneMatch[0]
      const name = nameMatch[1]
      const address = entry
        .replace(phoneNumber, "")
        .replace(nameMatch[0], "")
        .trim()

      if (phoneNumber.includes(phone)) {
        results.push({ name, address })
      }
    }
  }

  return results.length === 1 ? results[0] : null
}
// ---

// example
const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, "34-600-123-456")
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, "600-987")
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, "111")
// null

findInAgenda(agenda, "1")
// null

// --- code
function drawTable(data) {
  let border = "+"

  const columns = Object.keys(data[0]).map((key) => [
    key[0].toUpperCase() + key.slice(1),
    ...data.map((row) => row[key].toString())
  ])

  const tableRows = Array(columns[0].length).fill("|")

  for (const column of columns) {
    const maxCellWidth = Math.max(...column.map((cell) => cell.length))

    let index = 0
    for (const cell of column) {
      tableRows[index++] += ` ${cell.padEnd(maxCellWidth)} |`
    }

    border += "-".repeat(maxCellWidth + 2) + "+"
  }

  const [header, ...body] = tableRows

  return [border, header, border, ...body, border].join("\n")
}
// ---

// example
drawTable([
  { name: "Alice", city: "London" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "New York" }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: "Doll", quantity: 10 },
  { gift: "Book", quantity: 5 },
  { gift: "Music CD", quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+

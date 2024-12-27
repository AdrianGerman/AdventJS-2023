// --- code
function drawTable(data) {
  const columns = Object.keys(data[0])
  const headers = columns.map(
    (col) => col.charAt(0).toUpperCase() + col.slice(1)
  )

  const columnWidths = columns.map((col) =>
    Math.max(...data.map((row) => String(row[col]).length), col.length)
  )

  const createLine = () => {
    return (
      "+" + columnWidths.map((width) => "-".repeat(width + 2)).join("+") + "+"
    )
  }

  const createRow = (row) => {
    return (
      "|" +
      columns
        .map(
          (col, index) => ` ${String(row[col]).padEnd(columnWidths[index])} `
        )
        .join("|") +
      "|"
    )
  }

  const headerRow =
    "|" +
    headers
      .map((header, index) => ` ${header.padEnd(columnWidths[index])} `)
      .join("|") +
    "|"
  const separator = createLine()
  const rows = data.map(createRow)

  return [separator, headerRow, separator, ...rows, separator].join("\n")
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

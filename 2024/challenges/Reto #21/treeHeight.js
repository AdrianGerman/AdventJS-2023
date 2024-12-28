// --- code
function treeHeight(tree) {
  if (!tree) {
    return 0
  }

  const leftHeight = treeHeight(tree.left)
  const rightHeight = treeHeight(tree.right)

  return Math.max(leftHeight, rightHeight) + 1
}
// ---

// example
const tree = {
  value: "🎁",
  left: {
    value: "🎄",
    left: {
      value: "⭐",
      left: null,
      right: null
    },
    right: {
      value: "🎅",
      left: null,
      right: null
    }
  },
  right: {
    value: "❄️",
    left: null,
    right: {
      value: "🦌",
      left: null,
      right: null
    }
  }
}

// Llamada a la función
treeHeight(tree)
// Devuelve: 3

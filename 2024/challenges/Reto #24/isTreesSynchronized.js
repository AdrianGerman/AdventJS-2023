// --- code
function isTreesSynchronized(tree1, tree2) {
  function areMirrors(node1, node2) {
    if (!node1 && !node2) return true
    if (!node1 || !node2) return false

    return (
      node1.value === node2.value &&
      areMirrors(node1.left, node2.right) &&
      areMirrors(node1.right, node2.left)
    )
  }

  const synchronized = areMirrors(tree1, tree2)
  return [synchronized, tree1.value]
}
// ---

// example
const tree1 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" }
}

const tree2 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "⭐" }
}

isTreesSynchronized(tree1, tree2) // [true, '🎄']

const tree3 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "🎁" }
}

isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" }
}

isTreesSynchronized(tree1, tree4) // [false, '🎄']

isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" }) // [false, '🎅']

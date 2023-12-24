function transformTree(tree) {
  function buildTree(index) {
    if (index >= tree.length || tree[index] === null) {
      return null;
    }

    const currentNode = {
      value: tree[index],
      left: buildTree(2 * index + 1),
      right: buildTree(2 * index + 2),
    };

    return currentNode;
  }

  const rootNode = buildTree(0);
  return rootNode;
}

// Ejemplo de uso
const treeArray = [3, 1, 0, 8, 12, null, 1];
const treeObject = transformTree(treeArray);
console.log(treeObject);

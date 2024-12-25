// --- code
function createXmasTree(height, ornament) {
  let tree = ""

  for (let i = 1; i <= height; i++) {
    const side = "_".repeat(height - i)
    const center = ornament.repeat(2 * i - 1)

    tree += side + center + side

    if (i < height) {
      tree += "\n"
    }
  }

  const trunkSide = "_".repeat(height - 1)
  const trunkLine = trunkSide + "#" + trunkSide

  tree += "\n" + trunkLine
  tree += "\n" + trunkLine

  return tree
}
// ---

// example
const tree = createXmasTree(5, "*")
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, "+")
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, "@")
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/

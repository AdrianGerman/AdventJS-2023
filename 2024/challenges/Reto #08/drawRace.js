// ---code
function drawRace(indices, length) {
  const numCarriles = indices.length
  return indices
    .map((index, i) => {
      const offset = " ".repeat(numCarriles - 1 - i)
      const track = "~".repeat(length).split("")
      if (index) track[index > 0 ? index : length + index] = "r"
      return `${offset}${track.join("")} /${i + 1}`
    })
    .join("\n")
}

// ---

// example
drawRace([0, 5, -3], 10)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8)
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12)
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/

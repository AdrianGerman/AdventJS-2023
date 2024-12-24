function createChristmasTree(ornaments, height) {
  let response = "";
  const width = height * 2 - 1;

  ornaments = [...ornaments.repeat(60)];

  for (let fill = 0; fill < height; fill++) {
    const layerWidth = fill * 2 + 1;

    response +=
      " ".repeat((width - layerWidth) / 2) +
      ornaments.splice(0, fill + 1).join(" ") +
      "\n";
  }

  response += " ".repeat(width / 2) + "|" + "\n";

  return response;
}

// Tests
console.log("Test #01");
console.log(createChristmasTree("x", 3));
console.log("\n");

console.log("Test #02");
console.log(createChristmasTree("xo", 4));
console.log("\n");

console.log("Test #03");
console.log(createChristmasTree("123", 5));
console.log("\n");

console.log("Test #04");
console.log(createChristmasTree("*@o", 3));
console.log("\n");

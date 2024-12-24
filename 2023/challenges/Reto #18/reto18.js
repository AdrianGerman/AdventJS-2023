function drawClock(time) {
  const digits = [
    [
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
    ],
    [
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
    ],
    [
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
      ["*", " ", " "],
      ["*", " ", " "],
      ["*", "*", "*"],
    ],
    [
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
    ],
    [
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
    ],
    [
      ["*", "*", "*"],
      ["*", " ", " "],
      ["*", " ", " "],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
    ],
    [
      ["*", "*", "*"],
      ["*", " ", " "],
      ["*", " ", " "],
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
    ],
    [
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
    ],
    [
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
    ],
    [
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
    ],
  ];

  const clockMatrix = Array.from({ length: 7 }, () => Array(17).fill(" "));

  function drawDigit(digit, row, col) {
    for (let i = 0; i < digit.length; i++) {
      for (let j = 0; j < digit[i].length; j++) {
        clockMatrix[row + i][col + j] = digit[i][j];
      }
    }
  }

  const [hours, minutes] = time.split(":").map(Number);

  const hoursDigits = [Math.floor(hours / 10), hours % 10];
  const minutesDigits = [Math.floor(minutes / 10), minutes % 10];

  drawDigit(digits[hoursDigits[0]], 0, 0);
  drawDigit(digits[hoursDigits[1]], 0, 4);
  drawDigit(digits[minutesDigits[0]], 0, 10);
  drawDigit(digits[minutesDigits[1]], 0, 14);

  clockMatrix[2][8] = "*";
  clockMatrix[4][8] = "*";

  return clockMatrix;
}

// Ejemplo de uso
const result = drawClock("01:30");
for (const row of result) {
  console.log(row.join(""));
}

function maxDistance(movements) {
  let distance = 0;

  let right = movements.match(/>/g)?.length ?? 0;
  let left = movements.match(/</g)?.length ?? 0;

  distance += right;
  distance -= left;

  let extra = movements.length - (right + left);

  return Math.abs(distance) + extra;
}

// Ejemplo de uso
const movements = ">>*<";
const test1 = maxDistance(movements);
console.log(test1); // -> 2

const movements2 = "<<<>";
const test2 = maxDistance(movements2);
console.log(test2); // -> 2

const movements3 = ">***>";
const test3 = maxDistance(movements3);
console.log(test3); // -> 5

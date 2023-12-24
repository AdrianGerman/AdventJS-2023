function manufacture(gifts, materials) {
  return gifts.filter((gift) =>
    [...new Set(gift)].every((char) => materials.includes(char))
  );
}

// Ejemplo de uso
const gifts1 = ["tren", "oso", "pelota"];
const materials1 = "tronesa";

const test1 = manufacture(gifts1, materials1); // ["tren", "oso"]
console.log(test1);
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ["juego", "puzzle"];
const materials2 = "jlepuz";

const test2 = manufacture(gifts2, materials2); // ["puzzle"]
console.log(test2);

const gifts3 = ["libro", "ps5"];
const materials3 = "psli";

const test3 = manufacture(gifts3, materials3); // []
console.log(test3);

function organizeChristmasDinner(dishes) {
  const ingredientMap = {};

  for (const dish of dishes) {
    const dishName = dish[0];
    const ingredients = dish.slice(1);

    for (const ingredient of ingredients) {
      if (!ingredientMap[ingredient]) {
        ingredientMap[ingredient] = [ingredient];
      }

      if (!ingredientMap[ingredient].includes(dishName)) {
        ingredientMap[ingredient].push(dishName);
      }
    }
  }

  const result = Object.values(ingredientMap).filter(
    (ingredientList) => ingredientList.length > 2
  );

  result.sort((a, b) => a[0].localeCompare(b[0]));

  for (const ingredientList of result) {
    ingredientList.slice(1).sort((a, b) => a.localeCompare(b));
    ingredientList.splice(
      1,
      ingredientList.length - 1,
      ...ingredientList.slice(1).sort()
    );
  }

  return result;
}

// Ejemplo de uso con tu lista de platos
const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];

const result = organizeChristmasDinner(dishes);
console.log(result);

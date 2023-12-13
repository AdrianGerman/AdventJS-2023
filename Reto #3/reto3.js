function findNaughtyStep(original, modified) {
  if (original.length === modified.length) return "";

  const count = Math.max(original.length, modified.length);

  for (let index = 0; index < count; index++) {
    if (original[index] !== modified[index])
      return modified.length > original.length
        ? modified[index]
        : original[index];
  }
}

//Ejemplo de uso
const original1 = "abcd";
const modified1 = "abcde";
const test1 = findNaughtyStep(original1, modified1); // 'e'
console.log(test1);

const original2 = "stepfor";
const modified2 = "stepor";
const test2 = findNaughtyStep(original2, modified2); // 'f'
console.log(test2);

const original3 = "abcde";
const modified3 = "abcde";
const test3 = findNaughtyStep(original3, modified3); // ''
console.log(test3);

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

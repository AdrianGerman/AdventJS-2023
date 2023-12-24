function adjustLights(lights) {
  let changes = 0;

  function countChanges(firstColor, secondColor) {
    let changes = 0;

    for (let i = 0; i < lights.length; i++) {
      const expectedColor = i % 2 === 0 ? firstColor : secondColor;

      if (lights[i] !== expectedColor) {
        changes++;
      }
    }

    return changes;
  }

  const changesForward = countChanges("🔴", "🟢");
  const changesBackward = countChanges("🟢", "🔴");

  return Math.min(changesForward, changesBackward);
}

// Ejemplos de uso
console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])); // 1
console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])); // 2
console.log(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])); // 0
console.log(adjustLights(["🔴", "🔴", "🔴"])); // 1

function compile(code) {
  let counter = 0;
  let stack = [];

  for (let i = 0; i < code.length; i++) {
    const symbol = code[i];

    switch (symbol) {
      case "+":
        counter++;
        break;
      case "*":
        counter *= 2;
        break;
      case "-":
        counter--;
        break;
      case "%":
        stack.push(i);
        break;
      case "<":
        if (stack.length > 0) {
          i = stack.pop();
        }
        break;
      case "¿":
        if (counter <= 0) {
          let nested = 1;
          let firstPercentIndex = code.indexOf("%", i); // Buscar el primer '%' después de la posición actual
          while (nested > 0) {
            i++;
            if (code[i] === "¿") {
              nested++;
            } else if (code[i] === "?") {
              nested--;
            }
          }

          if (
            nested === 0 &&
            firstPercentIndex !== -1 &&
            firstPercentIndex < i
          ) {
            // Si se sale del bucle con nested igual a 0 y hay un '%' dentro del bloque antes de '?' correspondiente, retrocede al primer '%'
            i = firstPercentIndex - 1;
          } else if (nested === 0) {
            // Si se sale del bucle con nested igual a 0 pero no hay '%' dentro del bloque antes de '?', retrocede al punto de retorno
            i = stack.pop() - 1;
          }
        }
        break;
      case "?":
        // Finaliza un bloque condicional
        break;
      default:
        break;
    }
  }

  return counter;
}

// Ejemplos
console.log(compile("++*-")); // 3
console.log(compile("++%++<")); // 6
console.log(compile("++<--")); // 0
console.log(compile("++¿+?")); // 3
console.log(compile("--¿+++?")); // -2
console.log(compile("<%+¿++%++<?")); // Resultado: 7

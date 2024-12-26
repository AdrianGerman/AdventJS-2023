// --- code
function compile(instructions) {
  const registers = {}
  let pointer = 0

  const getValue = (x) => (isNaN(x) ? registers[x] ?? 0 : parseInt(x, 10))

  const commands = instructions.map((instruction) => {
    const [command, arg1, arg2] = instruction.split(" ")

    const operations = {
      MOV: () => (registers[arg2] = getValue(arg1)),
      INC: () => (registers[arg1] = getValue(arg1) + 1),
      DEC: () => (registers[arg1] = getValue(arg1) - 1),
      JMP: () => {
        if (getValue(arg1) === 0) pointer = parseInt(arg2, 10) - 1
      }
    }

    return operations[command]
  })

  while (pointer < commands.length) {
    commands[pointer]()
    pointer++
  }

  return registers.A
}
// ---

// example
const instructions = [
  "MOV -1 C", // copia -1 al registro 'C',
  "INC C", // incrementa el valor del registro 'C'
  "JMP C 1", // salta a la instrucción en el índice 1 si 'C' es 0
  "MOV C A", // copia el registro 'C' al registro 'a',
  "INC A" // incrementa el valor del registro 'a'
]

compile(instructions) // -> 2
/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */

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

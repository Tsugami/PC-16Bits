// const Memory = require('./memory')

// const memory = new Memory()
// memory._memory[0] = -104
// memory._memory[1] = 123

// console.log(memory._memory[0], memory._memory[1])


const Cpu = require('./cpu')

const cpu = new Cpu()

const code = [1, 0, 10, 1, 1, 23, 6, 2, 0, 1, 0]

function exec (arr) {
  for(let i = 0; i < arr.length;i++) {
    cpu.memory._memory[i] = arr[i]
  }
}

// exec(code)
exec([ 1, 0, 0,
  1, 1, 1,
  1, 2, 10,
  5, 0, 0, 1,
  13, 0, 2,
  16, 9, 0,
  0])

// cpu.next()
while (!cpu.halted) {
  cpu.next()
}

console.log(cpu.registers)

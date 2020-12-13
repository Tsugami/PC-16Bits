// const Memory = require('./core/memory');

// const memory = new Memory();
// memory[0] = -104;
// memory[1] = 123;

// console.log(memory[0], memory[1]);

const Cpu = require('./core/cpu');

const cpu = new Cpu();

// const code = [1, 0, 10, 1, 1, 23, 6, 2, 0, 1, 0];

// exec(code)
cpu.memory.set([
  1, 0, 10,
  // 1, 1, 1,
  // 1, 2, 10,
  // 5, 0, 0, 1,
  // 13, 0, 2,
  // 16, 9, 0,
  // 0,
]);

// cpu.next()
while (!cpu.halted) {
  cpu.next();
}

console.log(cpu.registers);

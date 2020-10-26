const { instructions } = require('./instructions');

class LogicalInstructions {
  static run(memory, registers, pointer, func) {
    const to = memory.get(pointer + 1);
    const second = memory.get(pointer + 2);
    const third = memory.get(pointer + 3);

    registers.set(to, func(registers.get(second), registers.get(third)));
  }

  static [instructions.AND](memory, registers, pointer) {
    LogicalInstructions.run(memory, registers, pointer, (second, third) => second & third);
  }

  static [instructions.OR](memory, registers, pointer) {
    LogicalInstructions.run(memory, registers, pointer, (second, third) => second | third);
  }

  static [instructions.XOR](memory, registers, pointer) {
    LogicalInstructions.run(memory, registers, pointer, (second, third) => second ^ third);
  }
}

module.exports = LogicalInstructions;

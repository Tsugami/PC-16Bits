const { instructions } = require('./instructions');

class LogicalInstructions {
  static [instructions.AND](memory, registers, pointer) {
    const to = memory.get(pointer + 1);
    const second = memory.get(pointer + 2);
    const third = memory.get(pointer + 3);

    registers.set(to, registers.get(second) & registers.get(third));
  }

  static [instructions.OR](memory, registers, pointer) {
    const to = memory.get(pointer + 1);
    const second = memory.get(pointer + 2);
    const third = memory.get(pointer + 3);

    registers.set(to, registers.get(second) | registers.get(third));
  }

  static [instructions.XOR](memory, registers, pointer) {
    const to = memory.get(pointer + 1);
    const second = memory.get(pointer + 2);
    const third = memory.get(pointer + 3);

    registers.set(to, registers.get(second) ^ registers.get(third));
  }
}

module.exports = LogicalInstructions;

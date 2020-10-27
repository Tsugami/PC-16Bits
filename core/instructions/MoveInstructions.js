const { instructions } = require('./instructions');

class MoveInstructions {
  static [instructions.MOV_C](memory, registers, pointer) {
    const to = memory.get(pointer + 1);
    const value = memory.get(pointer + 2);

    registers.set(to, value);
  }

  static [instructions.MOV_N](memory, registers, pointer) {
    const to = memory.get(pointer + 1);
    const lowbyte = memory.get(pointer + 2);
    const highbyte = memory.get(pointer + 3);

    registers.set(to, lowbyte | highbyte << 8);
  }

  static [instructions.MOV_R](memory, registers, pointer) {
    const to = memory.get(pointer + 1);
    const from = memory.get(pointer + 2);

    registers.set(to, registers.get(from));
  }

  static [instructions.MOV_M](memory, registers, pointer) {
    const to = memory.get(pointer + 1);
    const from = memory.get(pointer + 2);

    registers.set(to, memory.get(from));
  }

  static [instructions.STORE](memory, registers, pointer) {
    const to = memory.get(pointer + 1);
    const from = memory.get(pointer + 1);

    memory.setI(to, registers.get(from));
  }
}

module.exports = MoveInstructions;

const { instructions } = require('./instructions');

class ArithmeticInstructions {
  static run(memory, registers, pointer, func) {
    const to = memory.get(pointer + 1);
    const second = memory.get(pointer + 2);
    const third = memory.get(pointer + 3);

    registers.set(to, func(registers.get(second), registers.get(third)));
  }

  static [instructions.ADD](memory, registers, pointer) {
    ArithmeticInstructions.run(memory, registers, pointer, (second, third) => second + third);
  }

  static [instructions.SUB](memory, registers, pointer) {
    ArithmeticInstructions.run(memory, registers, pointer, (second, third) => second - third);
  }

  static [instructions.MUL](memory, registers, pointer) {
    ArithmeticInstructions.run(memory, registers, pointer, (second, third) => second * third);
  }

  static [instructions.DIV](memory, registers, pointer) {
    ArithmeticInstructions.run(memory, registers, pointer,
      (second, third) => Math.floor(second / third));
  }

  static [instructions.MOD](memory, registers, pointer) {
    ArithmeticInstructions.run(memory, registers, pointer, (second, third) => second % third);
  }
}

module.exports = ArithmeticInstructions;

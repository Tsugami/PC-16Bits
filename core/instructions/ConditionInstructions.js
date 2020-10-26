const { instructions } = require('./instructions');

class ConditionInstructions {
  static [instructions.CMP](memory, registers, pointer, flags) {
    const second = memory.get(pointer + 1);
    const third = memory.get(pointer + 2);
    const res = registers.get(second) - registers.get(third);

    flags.setZero(res === 0);
    flags.setSignal((res & (1 << 15)) >> 15);
  }
}

module.exports = ConditionInstructions;

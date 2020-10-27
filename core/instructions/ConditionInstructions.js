const { instructions } = require('./instructions');
const utils = require('../utils');

class ConditionInstructions {
  static [instructions.CMP](memory, registers, pointer, flags) {
    const second = registers.get(memory.get(pointer + 1));
    const third = registers.get(memory.get(pointer + 2));
    const res = second + utils.inverseNumber(third);

    flags.setZero(second === third ? 1 : 0);
    flags.setSignal(utils.getNegativeIdentifier(res));
    flags.setOverflow(utils.getOverflowBinaryInversed(res));
  }
}

module.exports = ConditionInstructions;

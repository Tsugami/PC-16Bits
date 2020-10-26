const { instructions, parameters } = require('./instructions');

class ConditionInstructions {
  static run(memory, _, pointer) {
    const lowbyte = memory.get(pointer + 1);
    const highbyte = memory.get(pointer + 2);

    return lowbyte | highbyte << 8;
  }

  static [instructions.JMP](memory, _, pointer) {
    return ConditionInstructions.run(memory, _, pointer);
  }

  static [instructions.JZ](memory, _, pointer, flags) {
    if (flags.zero) {
      return ConditionInstructions.run(memory, _, pointer);
    }

    return parameters[instructions.JZ];
  }

  static [instructions.JNZ](memory, _, pointer, flags) {
    if (!flags.zero) {
      return ConditionInstructions.run(memory, _, pointer);
    }

    return parameters[instructions.JNZ];
  }
}

module.exports = ConditionInstructions;

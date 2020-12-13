const { instructions, parameters } = require('./instructions');

class JumpInstructions {
  static run(memory, _, pointer) {
    const lowbyte = memory.get(pointer + 1);
    const highbyte = memory.get(pointer + 2);

    return lowbyte | highbyte << 8;
  }

  static [instructions.JMP](memory, _, pointer) {
    return JumpInstructions.run(memory, _, pointer);
  }

  static [instructions.JZ](memory, _, pointer, flags) {
    if (flags.isZero) {
      return JumpInstructions.run(memory, _, pointer);
    }

    return parameters[instructions.JZ];
  }

  static [instructions.JNZ](memory, _, pointer, flags) {
    if (!flags.isZero) {
      return JumpInstructions.run(memory, _, pointer);
    }

    return parameters[instructions.JNZ];
  }

  static [instructions.JG](memory, _, pointer, flags) {
    if (flags.isOK) {
      const to = memory.get(pointer + 1);
      return to;
    }

    return parameters[instructions.JG];
  }
}

module.exports = JumpInstructions;

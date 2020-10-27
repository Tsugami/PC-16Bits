const JumpInstructions = require('../JumpInstructions');
const { instructions, parameters } = require('../instructions');
const Memory = require('../../memory');
const Register = require('../../register');
const Flag = require('../../flags');

describe('Jump Instructions', () => {
  const memory = new Memory();
  const registers = new Register(10);
  const flags = new Flag();

  memory.set([0, 0, 1, 2]);

  it('JUMP: should return 256', () => {
    const result = JumpInstructions[instructions.JMP](memory, registers, 0, flags);
    expect(result).toEqual(256);
  });

  describe('JZ', () => {
    it('should return 256', () => {
      flags.setZero(true);
      const result = JumpInstructions[instructions.JZ](memory, registers, 0, flags);
      expect(result).toEqual(256);
    });

    it('should return parameter counter', () => {
      flags.setZero(false);
      const result = JumpInstructions[instructions.JZ](memory, registers, 0, flags);
      expect(result).toEqual(parameters[instructions.JZ]);
    });
  });

  describe('JNZ', () => {
    it('should return 256', () => {
      flags.setZero(false);
      const result = JumpInstructions[instructions.JNZ](memory, registers, 0, flags);
      expect(result).toEqual(256);
    });

    it('should return parameter counter', () => {
      flags.setZero(true);
      const result = JumpInstructions[instructions.JNZ](memory, registers, 0, flags);
      expect(result).toEqual(parameters[instructions.JNZ]);
    });
  });
});

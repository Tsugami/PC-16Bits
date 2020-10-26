const LogicalInstructions = require('../LogicalInstructions');
const { instructions } = require('../instructions');
const Memory = require('../../memory');
const Register = require('../../register');

describe('Logical Instructions', () => {
  const memory = new Memory();
  const registers = new Register(10);

  memory.set([0, 1, 1, 0]);

  describe('AND', () => {
    test('0 AND 0 = 0', () => {
      registers.set(0, 0);
      registers.set(1, 0);
      LogicalInstructions[instructions.AND](memory, registers, 0);
      expect(registers.get(1)).toEqual(0);
    });

    test('1 AND 1 = 1', () => {
      registers.set(0, 1);
      registers.set(1, 1);
      LogicalInstructions[instructions.AND](memory, registers, 0);
      expect(registers.get(1)).toEqual(1);
    });

    test('1 AND 0 = 0', () => {
      registers.set(0, 0);
      registers.set(1, 1);
      LogicalInstructions[instructions.AND](memory, registers, 0);
      expect(registers.get(1)).toEqual(0);
    });

    test('1 AND 0 = 0', () => {
      registers.set(0, 1);
      registers.set(1, 0);
      LogicalInstructions[instructions.AND](memory, registers, 0);
      expect(registers.get(1)).toEqual(0);
    });
  });

  describe('OR', () => {
    test('0 OR 0 = 0', () => {
      registers.set(0, 0);
      registers.set(1, 0);
      LogicalInstructions[instructions.OR](memory, registers, 0);
      expect(registers.get(1)).toEqual(0);
    });

    test('1 OR 1 = 1', () => {
      registers.set(0, 1);
      registers.set(1, 1);
      LogicalInstructions[instructions.OR](memory, registers, 0);
      expect(registers.get(1)).toEqual(1);
    });

    test('1 OR 0 = 1', () => {
      registers.set(0, 0);
      registers.set(1, 1);
      LogicalInstructions[instructions.OR](memory, registers, 0);
      expect(registers.get(1)).toEqual(1);
    });

    test('1 OR 0 = 1', () => {
      registers.set(0, 1);
      registers.set(1, 0);
      LogicalInstructions[instructions.OR](memory, registers, 0);
      expect(registers.get(1)).toEqual(1);
    });
  });

  describe('XOR', () => {
    test('0 XOR 0 = 0', () => {
      registers.set(0, 0);
      registers.set(1, 0);
      LogicalInstructions[instructions.XOR](memory, registers, 0);
      expect(registers.get(1)).toEqual(0);
    });

    test('1 XOR 1 = 0', () => {
      registers.set(0, 1);
      registers.set(1, 1);
      LogicalInstructions[instructions.XOR](memory, registers, 0);
      expect(registers.get(1)).toEqual(0);
    });

    test('1 XOR 0 = 1', () => {
      registers.set(0, 0);
      registers.set(1, 1);
      LogicalInstructions[instructions.XOR](memory, registers, 0);
      expect(registers.get(1)).toEqual(1);
    });

    test('1 XOR 0 = 1', () => {
      registers.set(0, 1);
      registers.set(1, 0);
      LogicalInstructions[instructions.XOR](memory, registers, 0);
      expect(registers.get(1)).toEqual(1);
    });
  });
});

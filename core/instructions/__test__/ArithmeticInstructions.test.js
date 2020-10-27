const ArithmeticInstructions = require('../ArithmeticInstructions');
const { instructions } = require('../instructions');
const Memory = require('../../memory');
const Register = require('../../register');
const Flags = require('../../flags');
const Util = require('../../utils');

describe('Arithmetic Instructions', () => {
  const memory = new Memory();
  const registers = new Register(10);
  const flags = new Flags();

  memory.set([0, 2, 1, 0]);
  registers.set(0, 20);
  registers.set(1, 10);

  test('20 + 10 = 30', () => {
    ArithmeticInstructions[instructions.ADD](memory, registers, 0, flags);
    expect(registers.get(2)).toEqual(30);
  });

  test('20 - 10 = -10', () => {
    ArithmeticInstructions[instructions.SUB](memory, registers, 0, flags);
    expect(Util.convertDecimalBinaryToNegative(registers.get(2))).toEqual(-10);
  });

  test('20 * 10 = 200', () => {
    ArithmeticInstructions[instructions.MUL](memory, registers, 0);
    expect(registers.get(2)).toEqual(200);
  });

  test('20 / 10 = 0', () => {
    ArithmeticInstructions[instructions.DIV](memory, registers, 0);
    expect(registers.get(2)).toEqual(0);
  });

  test('20 % 10 = 10', () => {
    ArithmeticInstructions[instructions.MOD](memory, registers, 0);
    expect(registers.get(2)).toEqual(10);
  });
});

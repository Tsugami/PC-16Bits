const LogicalInstructions = require('../LogicalInstructions');
const { instructions } = require('../instructions');
const Memory = require('../../memory');
const Register = require('../../register');

const memory = new Memory();
const registers = new Register(10);

describe('Logical Instructions', () => {
  test('AND', () => {
    memory.set([
      instructions.AND, 1, 1, 0,
      instructions.AND, 2, 2, 3,
    ]);

    registers.set(0, 0);
    registers.set(1, 1);
    LogicalInstructions[instructions.AND](memory, registers, 0);
    expect(registers.get(1)).toEqual(0);

    registers.set(2, 1);
    registers.set(3, 1);
    LogicalInstructions[instructions.AND](memory, registers, 3);
    expect(registers.get(2)).toEqual(1);
  });
});

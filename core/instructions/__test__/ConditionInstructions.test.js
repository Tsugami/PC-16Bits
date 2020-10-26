const ConditionInstructions = require('../ConditionInstructions');
const { instructions } = require('../instructions');
const Memory = require('../../memory');
const Register = require('../../register');
const Flag = require('../../flags');

describe('Condition Instructions', () => {
  const memory = new Memory();
  const registers = new Register(10);
  const flags = new Flag();

  memory.set([0, 0, 1, 2]);
  registers.set(0, 1);
  registers.set(1, 1);
  registers.set(2, 2);

  test('1 equal 1', () => {
    ConditionInstructions[instructions.CMP](memory, registers, 0, flags);
    expect(flags).toEqual(expect.objectContaining({ zero: true, signal: 0 }));
  });

  test('2 not equal 1', () => {
    ConditionInstructions[instructions.CMP](memory, registers, 1, flags);
    expect(flags).toEqual(expect.objectContaining({ zero: false, signal: 1 }));
  });
});
